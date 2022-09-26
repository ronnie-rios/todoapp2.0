import React from 'react'
import Form from './Form'

export default function DisplayTodos(props) {
  return (
    <div>DisplayTodos
        {props.todos.map((item) => (
            <div key={item.id}>
                {item.title}
                {item.description}
            </div>
        ))}
        <Form />
    </div>
  )
}
