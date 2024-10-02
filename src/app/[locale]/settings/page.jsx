import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'; // Profil simgesi için

export default function Settings() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 p-6 max-w-lg mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl text-lightcoral font-semibold">Update Your Account</h2>
          <span className="text-red-600 text-sm cursor-pointer">Delete Account</span>
        </div>
        <form className="flex flex-col space-y-4">
          <label className="font-medium">Profile Picture</label>
          <div className="flex items-center">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden mr-4">
              <Image
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <label htmlFor="fileInput" className="cursor-pointer">
              <FontAwesomeIcon icon={faUserCircle} className="w-8 h-8 p-1 text-black bg-lightcoral rounded-full" />
            </label>
            <input
              id="fileInput"
              type="file"
              className="hidden"
            />
          </div>

          <label className="font-medium">Username</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="border-b-2 border-gray-300 p-2 focus:outline-none focus:border-teal-500"
          />

          <label className="font-medium">Email</label>
          <input
            type="email"
            placeholder="sancarhukuk@gmail.com"
            name="email"
            className="border-b-2 border-gray-300 p-2 focus:outline-none focus:border-teal-500"
          />

          <label className="font-medium">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="border-b-2 border-gray-300 p-2 focus:outline-none focus:border-teal-500"
          />

          <button className="bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition duration-300">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
