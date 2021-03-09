import React from 'react'

const Task = (props) => {
    return (
        <div style={taskBox}>
            <h5 style={{display: 'inline'}}>{props.contact.name}</h5>
            <h5 style={{display: 'inline', marginLeft: '50px',}}>{props.contact.email}</h5>
            <button className='btn btn-danger' style={{marginLeft: '50px'}} 
            onClick={() => props.onDelete(props.contact.id)}>Delete</button>
            <br />
        </div>
    )
}
let taskBox = {
    backgroundColor: '#D4D4D4',
    borderRadius: '10px',
    margin: '15px',
    padding: '25px'
}
export default Task
