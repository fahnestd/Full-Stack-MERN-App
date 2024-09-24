import React, { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditPage = () => {
  const navigate = useNavigate()

  const { id } = useParams()

  const nameRef = useRef()
  const repsRef = useRef()
  const weightRef = useRef()
  const unitRef = useRef()
  const dateRef = useRef()

  useEffect(() => {
    fetchExercise()
  }, [])

  async function fetchExercise() {
    const response = await (
      await fetch(`/exercises/${id}`, {
        method: 'GET',
      })
    ).json()
    nameRef.current.value = response.name
    repsRef.current.value = response.reps
    weightRef.current.value = response.weight
    unitRef.current.value = response.unit
    dateRef.current.value = response.date
  }

  const submitEdit = async () => {
    const response = await fetch(`/exercises/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: nameRef.current.value,
        reps: repsRef.current.value,
        weight: weightRef.current.value,
        unit: unitRef.current.value,
        date: dateRef.current.value,
      }),
    })

    if (response.status === 200) {
      navigate('/')
    } else {
      alert(response.statusText)
    }
  }

  return (
    <div>
      <h2>Editing {nameRef?.current?.value}</h2>
      <table className='details'>
        <tr>
          <td className='entry'>Name</td>
          <td>
            <input type='text' ref={nameRef} />
          </td>
        </tr>
        <tr>
          <td className='entry'>Reps</td>
          <td>
            <input type='text' ref={repsRef} />
          </td>
        </tr>
        <tr>
          <td className='entry'>Weight</td>
          <td>
            <input type='text' ref={weightRef} />
          </td>
        </tr>
        <tr>
          <td className='entry'>Unit</td>
          <td>
            <select
              ref={(input) => {
                unitRef.current = input
              }}
            >
              <option value='lbs'>lbs.</option>
              <option value='kgs'>kgs.</option>
            </select>
          </td>
        </tr>
        <tr>
          <td className='entry'>Date</td>
          <td>
            <input type='text' ref={dateRef} />
          </td>
        </tr>
        <tr>
          <td></td>
          <td align='right'>
            <input type='button' onClick={() => submitEdit()} value='Edit' />
          </td>
        </tr>
      </table>
    </div>
  )
}

export default EditPage
