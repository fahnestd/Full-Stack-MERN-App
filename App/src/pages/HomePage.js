import React, { useEffect, useState } from 'react'
import ExerciseTable from '../components/ExerciseTable'

const HomePage = () => {
  const [exercises, setExercises] = useState([])

  const deleteEntry = async (id) => {
    await fetch(`/exercises/${id}`, { method: 'DELETE' })
    fetchExercises()
  }

  useEffect(() => {
    fetchExercises()
  }, [])

  async function fetchExercises() {
    const response = await (await fetch('/exercises')).json()
    setExercises(response)
  }
  return <div>{exercises && <ExerciseTable exercises={exercises} deleteEntry={deleteEntry} />}</div>
}

export default HomePage
