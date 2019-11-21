const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Swiggityyy')
fs.appendFileSync('notes.txt', ', and my name is Swoogityyy')

//Challenge: Append a message to notes.txt

//1. Use appendFilesync to append to the file
//2. Run the script
//3. Check your work by opening the file and viewing the appended text