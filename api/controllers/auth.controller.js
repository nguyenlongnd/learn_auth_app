const bcrypt = require('bcryptjs');


const handleSignUp = (req, res) => {
  res.send("run in handle sign in");
  const {userName, email, password} = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10)
  console.log("data", req.body);
};

module.exports = { handleSignUp };
