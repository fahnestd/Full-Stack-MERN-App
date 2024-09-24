import React, { useState } from 'react'

const RegistrationInfo = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const submit = (e) => {
    e.preventDefault()
    alert(`Thank you ${name}, You will now recieve promotions at ${email}`)
  }
  return (
    <div>
      <form>
        <fieldset>
          <legend>REGISTER</legend>
          <div>
            <label for='name'>Name</label>
            <input type='text' name='name' onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label for='email'>email</label>
            <input type='text' name='name' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <input type='submit' value='Submit' onClick={(e) => submit(e)} />
        </fieldset>
      </form>
    </div>
  )
}

export default RegistrationInfo
