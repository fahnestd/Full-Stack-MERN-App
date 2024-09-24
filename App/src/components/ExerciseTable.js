import React from 'react'
import ExcerciseRow from './ExcerciseRow'

const ExerciseTable = ({ exercises, deleteEntry }) => {
  return (
    <div>
      <table>
        <th>Name</th>
        <th>Reps</th>
        <th>Weight</th>
        <th>Date</th>
        <th>Actions</th>
        <tbody>
          {exercises.map((exercise) => (
            <ExcerciseRow exercise={exercise} deleteEntry={deleteEntry} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ExerciseTable
