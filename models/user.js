var Sequelize = require('sequelize')

module.exports = (sequelize,type)=>{

    return sequelize.define('user', {
        id:{
          type:Sequelize.STRING,
          primaryKey: true
        },
        firstName: {
          type: Sequelize.STRING,
        },
        lastName: {
          type: Sequelize.STRING
        }
      },
     );
}