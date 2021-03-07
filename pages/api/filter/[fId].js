export default (req, res) => {
  const {fId } = req.query
  console.log(req.query);
  res.send("done");
}