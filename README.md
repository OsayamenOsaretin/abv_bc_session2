# Bootcamp Home Session 2 - A function FizzBuzz

This repo holds a solution that defines a function for checking multiples of 3, 5 and 15(which is technically the lowest common multiple). If multiple of 3, function returns 'Fizz'. If 5, returns 'Buzz', and If both, returns 'FizzBuzz'

## Getting Started

To use this solution:

 - Open your Terminal or Command Prompt and [Navigate](https://computers.tutsplus.com/tutorials/navigating-the-terminal-a-gentle-introduction--mac-3855) to folder you want to keep working copy of repo.

 - Clone this repository: 

     run from your git terminal-
  ```git clone https://github.com/OsayamenOsaretin/abv_bc_session2/tree/function-fizzBuzz``` 

 

- In your working directory, install dependencies by running:

                           npm install

 

### Prerequisites
You need these installed if you want the sweet awesomeness of the fizzBuzz Calculator

- [Git](https://git-for-windows.github.io/) 
- [node.js](https://nodejs.org/en/download/)



### Installing
After collecting and installing the prerequisites:
- 

Install dependencies

```
npm install
```


## Running the tests

To run the tests:

``` npm test```

### Break down of what tests test

Tests were designed for the multiples of 3, 5, and both 3 and 5

```
It should return 'Fizz' for 6

It should return 'Buzz' for 10

It should return 'FizzBuzz' for 3 and 5

```

Tests were designed to throw error messages for empty and float arguments

 
     It should return 'Please enter an Integer to the FizzBuzz calculator' for empty arguments

      It should return 'Please enter an Integer, instead of a float' for float arguments 



## Asymptotic Analysis

The algorithm tests for no input and floats, it then goes on to test for if the number is divisible by the lowest common multiple(15). It goes on to test if the number is a multiple of 3 and 5

-Instatiations: Take constant time a * O(1)

-If statements that check for multiples: Also take constant time  b * O(1)

              Total Asymptotic conmplexiting: O(1)



## Built With

* [Sublime Text](hhttp://www.sublimetext.com/) - Text Editor used.
* [Git](https://github.com/) - Version Control
* [node.js](https://nodejs.org/) - Backend Javascript environment
* [jasmine]() - Testing Framework


## Authors

* **Osayamen** - *Initial work* [OsayamenOsaretin](github.com/OsayamenOsaretin)



## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
* Andela Bootcamp Facilitators and BFAs
* Andela Bootcampers
* Developer community

