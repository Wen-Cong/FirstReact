import React from 'react'
import Task from './Task'

const Tasks = (props) => {  
    return (
        <div style={tasks}>
            {props.contactList.map((contact) => (
                <Task contact={contact} onDelete={props.onDelete} key={contact.id}/>
            ))}
        </div>
    )
}
let tasks = {
    border: '2px solid blue',
    padding: '15px',
    marginTop: '20px'
  }
export default Tasks
