const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})


//--Users Model
// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         require: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         require: true,
//         trim: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('Email seems fishy...')
//             }
//         }
//     },
//     password: {
//         type: String,
//         require: true,
//         trim: true,
//         minlength: 7,
//         validate(value) {
//             if (value.toLowerCase().includes('password')) {
//                 throw new Error('Use a better password moron')
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error('Youre not a sperm moron')
//             }
//         }
//     }
// })

// const me = new User({
//     name: '   Swiggityyy   ',
//     email: 'Swiggityyy@gmail.com    ',
//     password: 'OoooWeeee '
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

//--Tasks Models
// const Tasks = mongoose.model('Tasks', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false,
//         required: false
//     }
// })

// const task = new Tasks({
//     description: 'Create Demand User Journey',
//     completed: false
// })  

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log('Error!', error)
// })