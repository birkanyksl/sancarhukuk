const router = require("express").Router();
const User = require("../models/User");
const RefreshToken = require("../models/RefreshToken");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

router.use(cookieParser());

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const hashedPassword = await argon2.hash(req.body.password);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    // Yeni kayıt için refresh token oluştur
    const refreshToken = new RefreshToken({
      userId: user._id,
      token: jwt.sign({ id: user._id }, process.env.JWT_REFRESH_SECRET, {
        expiresIn: "7d",
      }),
    });

    await refreshToken.save();

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).json("User not found");

    const validated = await argon2.verify(user.password, req.body.password);
    if (!validated) return res.status(400).json("Invalid password");

    // Yeni access token oluştur
    const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });

    // Kullanıcının mevcut refresh token'ını kontrol et
    let refreshToken = await RefreshToken.findOne({ userId: user._id });

    // Eğer kullanıcının refresh token'ı yoksa, yeni bir tane oluştur
    if (!refreshToken) {
      refreshToken = new RefreshToken({
        userId: user._id,
        token: jwt.sign({ id: user._id }, process.env.JWT_REFRESH_SECRET, {
          expiresIn: "7d",
        }),
      });
      await refreshToken.save();
    }

    console.log(
      "Mevcut veya yeni oluşturulan refresh token:",
      refreshToken.token
    );

    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
    console.log("Mevcut veya yeni oluşturulan access token:", accessToken);
  } catch (err) {
    console.error(err);
    res.status(500).json("An error occurred");
  }
});

// REFRESH TOKEN
router.post("/refresh", async (req, res) => {
  const { token, accessToken } = req.body;

  if (!token) return res.status(401).json("Refresh token not provided");
  if (!accessToken) return res.status(401).json("Access token not provided");

  try {
    const refreshToken = await RefreshToken.findOne({ token });
    if (!refreshToken) return res.status(403).json("Refresh token not found");


    // Refresh token'ı doğrula
    jwt.verify(token, process.env.JWT_REFRESH_SECRET, async (err, user) => {
      if (err) {
        console.error("Token doğrulama hatası:", err);
        return res.status(403).json("Invalid refresh token");
      }

      // Kullanıcının refresh token'ının geçerli olduğundan emin olun
      if (refreshToken.userId.toString() !== user.id) {
        return res
          .status(403)
          .json("Unauthorized: Refresh token does not belong to this user");
      }

      // Yeni access token oluştur
      const newAccessToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "15m",
      });
      console.log("Yeni access token:", newAccessToken);

      res.status(200).json({ accessToken: newAccessToken });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGOUT
router.post("/logout", async (req, res) => {
  res.status(200).json("Logged out successfully");
});

module.exports = router;
