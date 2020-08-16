const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'users',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    last_login_date: {
      type: Sequelize.DATE
    },
    registration_date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    status: {
      type: Sequelize.ENUM,
      values: ['Active', 'Blocked']
    },
    password: {
      type: Sequelize.STRING,
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
)