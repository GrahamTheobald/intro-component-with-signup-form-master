# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

## My process

Mobile first approach using SASS.
For the form validation I structured my javascript intricately using higher order functions to keep the
implementation clear and tidy.

### What I learned

I learned how reducing functions so that they each perform one clear task makes things easier to implement.
You can write out a function in the main flow of instructions and then implement it later on.
This helps you get an overview of what you need to do while it is fresh in your mind
