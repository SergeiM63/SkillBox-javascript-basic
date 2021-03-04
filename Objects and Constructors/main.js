'use strict'

function User(firstName, lastName) {
    let regDate = new Date();
    let options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };

    this.firstName = firstName;
    this.lastName = lastName;
    this.regDate = regDate.toLocaleString("ru", options);

    this.getFullName = function() {
      return this.firstName + ' ' + this.lastName + ' ' + this.regDate;
    }
  }

function Userlist() {
    this.users = [];
    this.add = function(user) {
        this.users.push(user);
    };
    this.getAllUsers = function() {
        return this.users;
    };
}

let userList = new Userlist;

(function getUserName() {
    let userName = prompt('Ваше Имя и Фамилия', 'Иван Иванов');
    if(userName) {
        let arrayUserName = userName.split(' ');
        let user = new User(arrayUserName[0], arrayUserName[1]);
        userList.add(user);
        getUserName();
    }
})();

console.log(userList.getAllUsers());

for (let i = 0; i < userList.users.length; i++) {
    console.log(userList.users[i].getFullName());
}
