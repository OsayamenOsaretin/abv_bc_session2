'use strict';

const MyApp = require('../app/library.js')


describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 3", function() {
    expect(MyApp.fizzBuzz(3)).toBe('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(MyApp.fizzBuzz(5)).toBe('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(MyApp.fizzBuzz(15)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(MyApp.fizzBuzz(45)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(MyApp.fizzBuzz(90)).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(MyApp.fizzBuzz(63)).toBe('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(MyApp.fizzBuzz(7)).toBe(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(MyApp.fizzBuzz(101)).toBe(101);
  });

  it("should return error message if no argument is passed", function(){
  	expect(MyApp.fizzBuzz()).toBe('Please enter a Number to the FizzBuzz calculator');
  });

  it("should return error message if float is passed instead of integer", function(){
  	expect(MyApp.fizzBuzz(4.5)).toBe('Please enter an Integer, instead of a float');
  });

});