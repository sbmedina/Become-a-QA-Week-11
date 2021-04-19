const express = require("express");
const app = express();
const port = 7000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening at Port ${port}`);
});

var handleRegister = function (req, res) {
  console.log(req.body);
  const newUser = {
    name: req.body.fullName,
    email: req.body.email,
    pass: req.body.password,
  };
  if (!newUser.fullName || !newUser.email || !newUser.password) {
    return res
      .status(400)
      .json({ msg: "Please complete all fields" });
  } else {
    return res.json({ result: "Data sent successfully" });
  }
};

var handleLogin = function (req, res) {
  console.log(req.body);
  const registeredUser = {
    email: req.body.email,
    password: req.body.password,
  };
  if (registeredUser.email && registeredUser.password) {
    return res.json({ result: "Data sent successfully" });
  } else {
    return res.status(400).json({ msg: "User does not match" });
  }
};

app.post("/register", handleRegister);

app.put("/login", handleLogin);
