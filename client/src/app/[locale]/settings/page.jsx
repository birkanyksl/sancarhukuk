"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useContext, useEffect, useState, useCallback } from "react";
import { Context } from "@/context/Context";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Settings() {
  const locale = useLocale();
  const { user, dispatch } = useContext(Context);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch({ type: "LOGIN_SUCCESS", payload: JSON.parse(storedUser) });
    }
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    if (!loading && !user) {
      router.push(`/${locale}/login`);
    }
  }, [loading, locale, router, user]);

  const handleLogout = useCallback(async () => {
    try {
      await axios.post("/api/auth/logout", {}, { withCredentials: true });

      dispatch({ type: "LOGOUT" });

      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  }, [dispatch, router]);

  const handleFileChange = useCallback((e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setUploadedImageUrl(URL.createObjectURL(selectedFile));
    }
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      dispatch({ type: "UPDATE_START" });

      const updatedUser = {
        userId: user._id,
        username: username || user.username,
        email: email || user.email,
        password: password || user.password,
      };

      const formData = new FormData();
      formData.append("userId", user._id);
      formData.append("username", updatedUser.username);
      formData.append("email", updatedUser.email);
      formData.append("password", updatedUser.password);

      if (file) {
        formData.append("file", file);
      }

      try {
        const uploadRes = await axios.post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        const updatedUserData = {
          ...updatedUser,
          profilePic: uploadRes.data,
        };

        const res = await axios.put(`/api/users/${user._id}`, updatedUserData);
        setError(false);
        setSuccess(true);
        dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
        setTimeout(() => setSuccess(false), 3000);
      } catch (err) {
        console.log(err);
        setError(true);
        setSuccess(false);
        dispatch({ type: "UPDATE_FAILURE" });
      }
    },
    [dispatch, file, username, email, password, user]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-50 mb-20">
      <div className="flex flex-col p-6 max-w-lg mx-auto ">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl text-lightcoral font-semibold">
            Update Your Account
          </h2>
          <span className="text-red-600 text-sm cursor-pointer" >
            {/* Delete Account */}
          </span>
        </div>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <label className="font-medium">Profile Picture</label>
          <div className="flex items-center">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden mr-4">
              <Image
                src={
                  uploadedImageUrl ||
                  user?.profilePic ||
                  "https://images.pexels.com/photos/27566893/pexels-photo-27566893/free-photo-of-safak-gun-dogumu-peyzaj-manzara.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
                }
                alt="Profile Picture"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <label htmlFor="fileInput" className="cursor-pointer">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="w-8 h-8 p-1 text-black bg-lightcoral rounded-full"
              />
            </label>
            <input
              id="fileInput"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          <label className="font-medium">Username</label>
          <input
            type="text"
            placeholder={user?.username}
            name="name"
            className="border-b-2 border-gray-300 p-2 focus:outline-none focus:border-teal-500 bg-transparent"
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className="font-medium">Email</label>
          <input
            type="email"
            placeholder={user?.email}
            name="email"
            className="border-b-2 border-gray-300 p-2 focus:outline-none focus:border-teal-500 bg-transparent"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="font-medium">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="border-b-2 border-gray-300 p-2 focus:outline-none focus:border-teal-500 bg-transparent"
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <div className="text-red-500">An error occurred</div>}
          {success && (
            <div className="text-green-500">Account updated successfully!</div>
          )}
          <button
            type="submit"
            className="w-full text-color6 font-normal py-2 border border-color6 rounded-sm transition-all duration-300 hover:font-semibold cursor-not-allowed"
            disabled
          >
            Update
          </button>

          <Link href={`/${locale}/write`}>
            <button
              type="button"
              className="w-full text-color6 font-normal py-2 border border-color6 rounded-sm transition-all duration-300 hover:font-semibold "
            >
              New Post
            </button>
          </Link>

          <button
            type="button"
            className="bg-red-500 text-white py-2  hover:bg-red-600 transition duration-300"
            onClick={handleLogout}
          >
            Logout
          </button>
        </form>
      </div>
    </div>
  );
}
