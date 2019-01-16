const User = require('./user')
const Note = require('./note')
const Food = require('./food')
const Measurement = require('./measurement')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

User.hasMany(Note)
Note.belongsTo(User)
User.hasMany(Food)
Food.belongsTo(User)
User.hasMany(Measurement)
Measurement.belongsTo(User)

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
  Measurement
}
