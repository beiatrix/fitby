const User = require('./user')
const Note = require('./note')
const Food = require('./food')
const Measurement = require('./measurement')
const Daily = require('./daily')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

// user - note
User.hasMany(Note)
Note.belongsTo(User)
// user - food
User.hasMany(Food)
Food.belongsTo(User)
// user - measurement
User.hasMany(Measurement)
Measurement.belongsTo(User)
// user - dailies
User.hasMany(Daily)
Daily.belongsTo(User)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

module.exports = {
  User,
  Note,
  Food,
  Daily,
  Measurement
}
