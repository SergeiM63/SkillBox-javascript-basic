'use strict'

let userLogin, userPassword;
let usersArray = [
  {
    name: "Peter",
    login: "PeteBull",
    password: "123"
  },
  {
    name: "Sergei",
    login: "Dsoul",
    password: "321"
  },
  {
    name: "Fedor",
    login: "Fedos",
    password: "abc"
  },
]

function getUser () {
  return (
    userLogin = prompt('Введите логин'),
    userPassword = prompt('Введите пароль')
    );
};

function checkUser() {
  usersArray.filter(user => {
    if(userLogin === user.login && userPassword === user.password)
    return alert( `Привет, ${user.name} Вход разрешён!` );
  });
}

getUser();

while ( userLogin === '' || userPassword === '' ) {
  alert('Введите логин и пароль!');
  getUser();
}

checkUser();

if ( userLogin == null || userPassword == null ) alert('Вход отменён!');