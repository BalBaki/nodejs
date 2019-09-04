var Sequelize = require('sequelize');

module.exports = (sequelize, type) => {
    return sequelize.define('food', {
        foodName: {
            type: Sequelize.STRING
        }
    },
   );

}