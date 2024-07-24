const handleSignUp = (req, res) => {
  console.log("data", req.body);
  res.send("run in handle sign in");
};

module.exports = { handleSignUp };
