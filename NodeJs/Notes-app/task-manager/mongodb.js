// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017' //use the full local host ip to avoid future problems
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to databse!')
    }

    const db = client.db(databaseName)

        //--Delete Commands
        // db.collection('users').deleteMany({
        //     age: 21
        // }).then((result) => {
        //     console.log(result)
        // }).catch((error) => {
        //     console.log(error)
        // })

        // db.collection('tasks').deleteOne({
        //     name: 'ugly chick'
        // }).then((result) => {
        //     console.log(result)
        // }).catch((error) => {
        //     console.log(error)
        // })
    
        //--Update One/Update Money using $set and $inc
        // db.collection('users').updateOne({
        //     _id: new ObjectID("5dd91fb1b2f82c9f8be5496b")
        // }, {
        // $set: {
        //     name: 'Kai',
        // }
        //     $inc: {
        //         age: 1,
        //     }
        // }).then((result) => {
        //     console.log(result)
        // }).catch((error) => {
        //     console.log(error)
        // })


    //--Find Operator
    // db.collection('users').findOne({ _id: new ObjectID("5dd666fdbafcb0757e7cb800") }, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to Fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("5dd669f8e641f27619c52766")}, (error, task) => {
    //     if(error) {
    //         return console.log('Unable to Fetch')
    //     }

    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed: true}).toArray((error, task) => {
    //     console.log(task)
    // })
    
    // db.collection('users').find({ age: 27}).toArray((error, users) => {
    //     console.log(users)
    // })

    //--InsertONe and InsertMany

    // db.collection('users').insertOne({
    //     name: 'Anthony',
    //     age: 23
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Tiffany',
    //         age: 21
    //     }, {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         name: 'Swiggityyy',
    //         completed: true
    //     }, {
    //         name: 'hot chick',
    //         completed: true
    //     }, {
    //         name: 'ugly chick',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents')
    //     }
    //     console.log(result.ops)
    // })

    //--Update and Update Many
    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })
})