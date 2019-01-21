/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */

// ========== GLOBAL ==========
export {default as Navbar} from './navbar'
export {default as UserHome} from './user-home'
export {Login} from './login'
export {SignUp} from './signUp'
export {default as Home} from './home'
export {default as Footer} from './footer'
export {default as PersistentDrawer} from './persistentDrawer'

// ========== NUTRITION ==========
export {default as Nutrition} from './nutrition'
export {default as SimplePieChart} from './simplePieChart'
export {default as FoodCard} from './foodCard'
export {default as FoodItem} from './foodItem'
export {default as AddFood} from './addFood'

// ========== NUTRITION ARCHIVE ==========
export {default as NutritionArchive} from './nutritionArchive'
export {default as PercentAreaChart} from './percentAreaChart'

// ========== FITNESS ==========
export {default as Fitness} from './fitness'
export {default as SimpleLineChart} from './simpleLineChart'
export {default as MeasurementCard} from './measurementCard'
export {default as AddMeasurement} from './addMeasurement'
export {default as Dailies} from './dailies'

// ========== FITNESS ARCHIVE ==========
export {default as FitnessArchive} from './fitnessArchive'
export {default as StackedBarChart} from './stackedBarChart'
