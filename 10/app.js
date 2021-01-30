const { default: axios } = require('axios');

function sum(a, b) {
    return a + b;
}

function sayCheese() {
    return 'cheese';
}

function checkValue(value) {
    return value;
}

function createUser() {
    return { name: 'Anton' };
}

function checkEmail(email) {
    return email;
}

const checkArray = (array) => {
    return array;
};

function checkRequest() {
    axios
        .get('https://jsonplaceholder.typicode.com/users/1')
        .then((res) => res.data);
}

module.exports = {
    sum,
    sayCheese,
    checkValue,
    createUser,
    checkEmail,
    checkArray,
    checkRequest,
};
