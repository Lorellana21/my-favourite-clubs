# My favourite clubs

### What is that?👈

This is a review exercise made when we reached the middle of the React module at the Bootcamp. 🚀

It consists of painting a list of clubs which, in turn, contains a list of members.👨‍👨‍👧‍👦

And this data can be found at a constant stream of information.

```
//in the folder "data", file: "clubs.json"
[
    {
      "name": "Book club",
      "fa": "fas fa-glasses",
      "members": [
        "Rosalie Bradley",
        "Lula Day",
        "Hallie Bryant",
        "Antonio Martin",
        "Polly Nelson"
      ]
    },
    {
      "name": "Chess club",
      "fa": "fas fa-chess",
      "members": [
        "Francisco Alexander",
        "Alice Garner",
        "Michael Elliott",
        "Tyler Sparks",
        "Rose Munoz",
        "Lena Rios",
        "Abbie Perkins"
      ]
    },
    {
      "name": "Escape room club",
      "fa": "fas fa-dungeon",
      "members": [
        "Della Frank",
        "Nathan Briggs",
        "Alexander Caldwell",
        "John McCarthy",
        "Theodore Lawson"
      ]
    },
    {
      "name": "Thief club",
      "fa": "fas fa-mask",
      "members": [
        "Ina Becker",
        "Jared Bryan",
        "Eugenia Crawford",
        "Mina Goodwin",
        "Hester Rodriquez",
        "Cameron Watts",
        "Charles Daniel",
        "Christine Barnes"
      ]
    },
    {
      "name": "Fight club",
      "fa": "fas fa-fist-raised",
      "members": [
        "Bernice Marshall",
        "Alvin McCormick",
        "Aiden Edwards",
        "Daniel Mendoza",
        "Olive Poole"
      ]
    },
    {
      "name": "Magic club",
      "fa": "fas fa-magic",
      "members": [
        "Harry Ruiz",
        "Tom Dunn",
        "Emily Gonzales",
        "Evelyn Snyder",
        "Evan Doyle",
        "Stanley Mann"
      ]
    },
    {
      "name": "Live long and prosper club",
      "fa": "fas fa-hand-spock",
      "members": [
        "Shane Lambert",
        "Willie Young",
        "Jane Hunt",
        "Martha Houston",
        "Clyde Johnston",
        "Jonathan Brooks",
        "Emily Howard",
        "Steven Peters"
      ]
    }
  ]
  ```
  

**Instructions**

Adding our data constant to the `App.js` file we need to paint the list of clubs with:

- Icon 👌
- Club name
- List of members

In the first phase the important thing is to paint the data, but the aim is to create two more components:

- `ClubList.js` with the list of clubs
- `Club.js` with a card for each club
