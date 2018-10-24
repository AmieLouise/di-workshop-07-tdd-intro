# Workshop: Building a Coolculator 🔢

Collaborators: [your github username] & [your partners github username]

Make sure you’re working in pairs - on a single laptop. You’ll be **pair programming**. Remember, in pair programming, there are two roles - **driver** and **navigator**.

Start by forking this repo...

![fork button](https://readme-pics.s3.amazonaws.com/fork_button.jpg)

Forking creates a copy of this repo in your own GitHub account. Add your partner as a collaborator by going to 'Settings' > 'Collaborators & teams' and entering their GitHub username in the 'Collaborators' box. That means you'll both have access to the repo.

Next, clone down the repo onto the laptop you're working on, change into the directory and run

```shell
npm install
```

This will install the required dependancies, including [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com).

To check everything is working, run the tests with

```shell
npm test
```

You should see something like this:

![Test Ouptut](http://c.danny.is/178dbbaf264f/npmtest.png)

---

For each of the **bold** questions below...

<h3 align="center">
  🗣 Discuss &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  👩‍💻 Change &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  👀 Observe &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  🔄 Repeat
</h3>

Once you understand what's going on, **ANSWER THE QUESTION IN THIS README FILE** and make the required changes to the code.

ℹ️ Make sure you commit regularly!

---

## Part 1: Testing `Array`

Look in [`array.test.js`](test/array.test.js). This contains some tests for JavaScript's built-in Array methods.

**What do the existing tests actually test (explain in english)?**
  The first it statement checks if the fuction adds a new item to an array but calling the function to add the value 5 to the array. It then checks if the returned array contains the new value.
  The second it statement checks if the same function changes it's length when a new value is added. It does this by setting an array with 4 values, using the function to add another and then checking that after this the length has increased to 5 as expected. 


**Add a test for the `pop()` method.**
Hint: You'll need _two_ assertions to fully test that it `pop()` works. Explain why you chose these assertions here.

The first test works in the same way as the first push() test in the fact you first set up a string, call the function and I've chosen the assertion that the array will equal [1, 2, 3] because the function should remove the last array entry which was 4

I've set up the second test to create an array with a length of 4. Using what I know in the first text I have chosen the assertion that the resulting array length will be 3 as one of the value will have been removed.

> 💡 **REMINDER**: Do you need to commit your answers to the questions above?

## Part 2: The Coolculator

Until now, we've been testing JavaScript's in-built functionality, which is kinda pointless - the folks who wrote JavaScript probably already have tests for this stuff. Let's take a look at our own project: the **Coolculator**. This is a class that has a bunch of methods for doing calculator-like stuff.

Read The coolculator class and tests.

**What methods does the Cooclulator currently implement?**

**Describe how the existing test works**

**Change a value in the `add()` test so it fails.**
Once you've seen it fail, revert your change so it's green again.

**Changethe implementation of `add()` so it always returns `1000`.**
Once you've seen it fail, revert your change so it's green again.

Now let's do some TDD! Uncomment the `multiply()` test.

**What do you expect to happen when you run your tests?**

**What actually happened when you ran your tests?**

**Add a method to the Coolculator so the test passes green**

**Uncomment the `subtract()` test and write some code to make it green**
Remember the process: Red / Green / Refactor - is there any refactoring you could do to clean up your code?

> 💡 **REMINDER**: Do you need to commit your answers to the questions above?

## Part 3: Extending the Coolculator

Add some more methods to the Coolculator class using the Red/Green/Refactor process. Be sure to write your tests first. Here are some things you could add to your calculator:

| **Function**  |                                                                                                                                                               |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| divide        | Takes two numbers and divides the first by the second                                                                                                         |
| highest       | Takes two integers and returns the highest one                                                                                                                |
| lowest        | Takes two integers and returns the lowest one                                                                                                                 |
| double        | Takes a number and doubles it                                                                                                                                 |
| square        | Takes one number and squares it                                                                                                                               |
| raise         | Takes two numbers and raises the first one to the power of the second                                                                                         |
| isNegative    | Takes a number and returns `true` if it's negative and `false` if it's positive                                                                               |
| isPositive    | Takes a number and returns `true` if it's positive and `false` if it's negative                                                                               |
| isCool        | Takes a number and returns true if the number is cool (ie. starts and ends with the same digit). Should return a boolean                                      |
| sum           | Takes an array of numbers and adds them all                                                                                                                   |
| multiplyArray | Takes an array of numbers and multiplies them all                                                                                                             |
| mean          | Takes an array of numbers and returns the mean (average)                                                                                                      |
| factorial     | Takes a single number and calculates its factorial (this is kinda hard)                                                                                       |
| random        | Takes an integer and returns a random integer between 0 and it. How might we test this? (This requires some _thinking!_, and we'll never have a perfect test) |

> 💡 **REMINDER**: Do you need to commit your new code?

## Part 4 (extension): More Array Tests

⚠️ _Don't attempt this unless you've finished all your other work_

Add some more tests for JavaScript's built-in array methods:

- `indexOf()`
- `join()`
- `shift()`
- `unshift()`
- Any others you can think of!

## Part 5 (super-extension)

⚠️ _Don't attempt this unless you've finished all your other work_

Use TDD to adapt your add method so it takes an **arbitrary number** of integers as arguments, and adds them all together, eg:

```js
add(1, 2) //=> 3
add(1, 2, 7, 10) //=> 20
add(5) //=> 5
```
