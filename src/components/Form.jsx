import React, { useState } from 'react'

export default function Form() {
    const [form, setForm] = useState()
    
    function formHandler(e) {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value })
    }
  
    return (
        <form className='form' onChange={formHandler}>
            <input type="text" name='title' placeholder='title' />
            <input type="text" name='body' placeholder='enter a brief description' />
            <button>Submit</button>
        </form>
        
  )
}
