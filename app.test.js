// app.test.js

const add = require("./app");

test('should add two numbers correctly',() =>{
    expect(add(1,2)).toBe(3);

});