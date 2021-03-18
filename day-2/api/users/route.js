let express = require("express");
let router = express.Router({mergeParams:true});
let UserController = require("./controller");

router.get("/", (req, res) => {
  res.status(200).send(UserController.GetUsers());
});

router.get("/:id", (req, res) => {
  console.log(UserController.GetUser(req.params.id));
  res.status(200).send(UserController.GetUser(req.params.id));
});

router.post("/", (req, res) => {
  UserController.CreateUser(req.body);
  res.status(201).send({ message: "User created" });
});

router.delete("/:id", (req, res) => {
  UserController.DeleteUser(req.params.id);
  res.status(201).send({ message: "User deleted" });
});

module.exports = router;
