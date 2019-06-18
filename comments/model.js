const Sequelize = require('../node_modules/sequelize')
const sequelize = require('../db')

const Comment = sequelize.define('comments', {
    text: {
        type: Sequelize.TEXT,
        field: 'text',
        allowNull: false
    },
    author: {
        type: Sequelize.TEXT,
        field: 'author',
        allowNull: false
    }
  })

  module.exports = Comment