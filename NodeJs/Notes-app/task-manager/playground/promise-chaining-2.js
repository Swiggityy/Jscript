require('../src/db/mongoose')
const Task = require('../src/models/tasks')

// Task.findByIdAndDelete('5ddc9f1a1397acc49bf65fd7').then((tasks) => {
//     console.log(tasks)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndUpdate(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('5ddca73a537ed6c6b2e613dd').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})