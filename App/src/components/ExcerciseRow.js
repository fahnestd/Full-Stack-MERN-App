import React from 'react'
import './style.css'
import { AiOutlineEdit } from 'react-icons/ai'
import { MdOutlineDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'

const ExcerciseRow = ({ exercise, deleteEntry }) => {
  return (
    <tr>
      <td>{exercise.name}</td>
      <td>{exercise.reps}</td>
      <td>
        {exercise.weight} {exercise.unit}
      </td>
      <td>{exercise.date}</td>
      <td className='actions'>
        <Link to={`/edit/${exercise._id}`} style={{ margin: '0', textDecoration: 'none', color: 'inherit' }}>
          <div className='action-button'>
            <AiOutlineEdit />
          </div>
        </Link>
        <div className='action-button' onClick={() => deleteEntry(exercise._id)}>
          <MdOutlineDelete />
        </div>
      </td>
      {/* <td>
        <SelectQuantity />
      </td> */}
    </tr>
  )
}

export default ExcerciseRow
