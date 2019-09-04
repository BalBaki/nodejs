var Sequelize = require('sequelize')
var UserModule = require('./models/user')
var FoodModule = require('./models/food')


//Db Connection String
//dbname,username,password
var sequelize = new Sequelize('sequlizedeneme','baki','saat3457',{
    dialect : 'mssql',
    host: 'localhost',
    define:{
        timestamps: false // zamanları kapatır.
    }
});


//Db Connection Test
sequelize
.authenticate()
.then(()=>{
    console.log("Db connected")
})
.catch(err=>{
    console.error("Not connected to db : ", err)
})

let User = UserModule(sequelize,Sequelize) // Call UserModule
let Food = FoodModule(sequelize,Sequelize)

// Create Table and Sync
sequelize.sync()
.then(()=>{
    console.log("Tables created.");
})
.catch(()=>{
    console.log("Tables not created")
})

module.exports = {
    User,
    Food
  }