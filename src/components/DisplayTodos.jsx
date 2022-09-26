import React from 'react'
import Form from './Form'

export default function DisplayTodos(props) {
  return (
    <div>
        <h3>DisplayTodos</h3>
        {props.todos.map((item) => (
            <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
            </div>
        ))}
        <Form todos={props}/>
    </div>
  )
}
