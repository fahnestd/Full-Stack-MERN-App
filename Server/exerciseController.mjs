import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import {
  createExercise,
  retrieveExercises,
  retrieveExercise,
  updateExercise,
  deleteExercise,
} from './exerciseModel.mjs'

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(express.static('public'))
app.use(cors())

app.post('/exercises', (req, res) => {
  const workoutData = req.body

  if (validateWorkoutData(workoutData)) {
    createExercise(workoutData.name, workoutData.reps, workoutData.weight, workoutData.unit, workoutData.date)
      .then((data) => {
        res.type('application/json')
        res.status(201)
        res.send(data)
      })
      .catch((error) => {
        console.log('Error creating exercise: ', error)
      })
  } else {
    res.type('application/json')
    res.status(400)
    res.send({ Error: 'Invalid request' })
  }
})

app.get('/exercises', (req, res) => {
  retrieveExercises().then((results) => {
    res.type('application/json')
    res.status(200)
    res.send(results)
  })
})

app.get('/exercises/:id', (req, res) => {
  retrieveExercise(req.params.id)
    .then((result) => {
      res.type('application/json')
      res.status(200)
      res.send(result)
    })
    .catch(() => {
      res.type('application/json')
      res.status(404)
      res.send({ Error: 'Not found' })
    })
})

app.put('/exercises/:id', async (req, res) => {
  const workoutData = req.body
  if (validateWorkoutData(workoutData)) {
    updateExercise(req.params.id, workoutData)
      .then((result) => {
        res.type('application/json')
        res.status(200)
        res.send(result)
      })
      .catch(() => {
        res.type('application/json')
        res.status(404)
        res.send({ Error: 'Not found' })
      })
  } else {
    res.type('application/json')
    res.status(400)
    res.send({ Error: 'Invalid request' })
  }
})

app.delete('/exercises/:id', (req, res) => {
  deleteExercise(req.params.id)
    .then(() => {
      res.sendStatus(204)
    })
    .catch(() => {
      res.type('application/json')
      res.status(404)
      res.send({ Error: 'Not found' })
    })
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})

function isDateValid(date) {
  const format = /^\d{1,2}[-\/]\d{1,2}[-\/]\d{1,4}$/
  return format.test(date)
}

function validateWorkoutData(workoutData) {
  return (
    workoutData.name &&
    workoutData.reps &&
    workoutData.weight &&
    workoutData.unit &&
    workoutData.date &&
    workoutData.name !== '' &&
    workoutData.reps > 0 &&
    workoutData.weight > 0 &&
    ['kgs', 'lbs'].includes(workoutData.unit) &&
    isDateValid(workoutData.date)
  )
}
