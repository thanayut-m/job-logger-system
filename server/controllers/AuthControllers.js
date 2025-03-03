exports.signUp = (req, res) => {
  try {
    console.log("Test");
    const result = "Testqw";
    res.status(200).json({ message: result });
  } catch (e) {
    console.log(e.message);
  }
};
