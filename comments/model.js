const Sequelize = require('../node_modules/sequelize')
const sequelize = require('../db')
const Advert = require('../adverts/model')

const Comment = sequelize.define('comments', {
    text: {
        type: Sequelize.TEXT,
        field: 'text',
        allowNull: false
    },
  })
  module.exports = Comment