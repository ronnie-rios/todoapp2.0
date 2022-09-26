import React, { useState } from 'react'

export default function Form(props) {
    const [form, setForm] = useState(props)
    
    function formHandler(e) {
        e.preventDefault()
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value })
    }
  
    return (
        <form className='form' onSubmit={formHandler} onChange={formHandler}>
            <input type="text" name='title' placeholder='title' />
            <input type="text" name='body' placeholder='description' />
            <button>Submit</button>
        </form>   
  )
}
