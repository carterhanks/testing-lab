module.exports = {
    returnTwo: function() {
        return 2;
    },
    greeting: function(name1, name2) {
        return `Hello, ${name1}.`;
    },
    add: function(num1, num2) {
        return num1 + num2;
    },
    multiply: function(num1, num2) {
        return num1 * num2
    },
    divide: function(num1, num2) {
        return num1 / num2
    },
    subtract: function(num1, num2) {
        return num1 - num2
    },
    evenNumber: function(num) {
        return (num % 2 === 0);
    }
};