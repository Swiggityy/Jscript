const fs = require('fs')

//Read and overwrite JSON
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Swiggityyy'
user.age = 26

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)


//Everything leading up to Read and Overwrite JSON
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)
// // fs.writeFileSync('1-json.json', bookJSON) 
// // const parsedData = JSON.parse(bookJSON)
// // console.log(parsedData.author)