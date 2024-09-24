import mongoose from 'mongoose'

mongoose.connect(process.env.MONGODB_CONNECT_STRING, { useNewUrlParser: true })

const db = mongoose.connection

const exerciseSchema = mongoose.Schema({
  name: { type: String, required: true },
  reps: { type: Number, required: true },
  weight: { type: Number, required: true },
  unit: { type: String, required: true },
  date: { type: String, required: true },
})
const Exercise = mongoose.model('Exercise', exerciseSchema)

async function createExercise(name, reps, weight, unit, date) {
  const exercise = new Exercise({ name, reps, weight, unit, date })
  return exercise.save()
}

async function retrieveExercises() {
  const exercises = await Exercise.find({}).exec()
  return exercises
}

async function retrieveExercise(id) {
  const exercise = await Exercise.findById(id).exec()
  return exercise
}

async function updateExercise(id, data) {
  const result = await Exercise.findByIdAndUpdate(id, data)
  return result
}

async function deleteExercise(id) {
  const result = await Exercise.findByIdAndDelete(id)
  return result
}

db.once('open', () => {
  console.log('Successfully connected to MongoDB using Mongoose!')
})

export { createExercise, retrieveExercises, retrieveExercise, updateExercise, deleteExercise }
