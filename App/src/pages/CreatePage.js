import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const CreatePage = () => {
  const navigate = useNavigate()

  const nameRef = useRef('')
  const repsRef = useRef('')
  const weightRef = useRef('')
  const unitRef = useRef('')
  const dateRef = useRef('')

  const submitCreate = async () => {
    const response = await fetch(`/exercises/`, {
      method: 'POST',
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

    if (response.status === 201) {
      alert('Created Successfully!')
    } else {
      alert(response.statusText)
    }
    navigate('/')
  }

  return (
    <div>
      <h2>Create a new Entry</h2>
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
            <input type='button' onClick={() => submitCreate()} value='Create' />
          </td>
        </tr>
      </table>
    </div>
  )
}

export default CreatePage
