//Challenge: Define and use a function in a new file

//1. Create a new file called notes.js
//2. Create getNotes function taht returns "Your notes..."
//3. Export getNotes function
//4. From app.js, load in and call the function printing message to console

const getNotes = function () {
    return 'The bomb has been planted...'
}

module.exports = getNotes

//and

const getNotes = require('../notes.js')

const msg = getNotes()

console.log(msg)