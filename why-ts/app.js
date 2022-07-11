// api url
const url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const address = document.querySelector('#address');

// user data
const user = {};

/**
 * Address 객체 타입 선언
 * @typedef {object} Address 
 * @property {string} street
 * @property {string} city
 */

/**
 * User  객체 타입 선언
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * fetchUser()의 return 타입 선언
 * @returns {Promise<User>}
 */
const fetchUser = () => {
  return axios.get(url);
}

const startApp = () => {
  fetchUser()
    .then(function (response) {
      console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
