let users = [{
        name:'sadi',
        id:1
}];
class UserController {
  static CreateUser(user) {
    users.push(user);
  }

  static GetUser(id) {
    return users.find((user) => user.id === Number(id));
  }

  static DeleteUser(id) {
    users = users.filter((user) => Number(id) !== user.id);
  }

  static GetUsers() {
         console.log(users);
    return users;
  }
}
module.exports = UserController;
