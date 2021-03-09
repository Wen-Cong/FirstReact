import React from 'react'
import './ContactForm.css';

const contactForm = (props) => {
    let contact = () => {
        let contact = {id: (Math.floor(Math.random() * 1000) + 1).toString(), 
            name: document.getElementById('fname').value,
            email: document.getElementById('email').value}
            return contact;
    }
    return (
        <div>
            {/* <form className='form'> */}
            <label for="fname">Name: </label>
            <input type="text" id="fname" name="firstname" placeholder="Name" className='form-control' />
            <label for="email">Email: </label>
            <input type="text" id="email" name="email" placeholder="Email" className='form-control' />
            <button className='btn btn-black' 
            onClick={() => props.onAdd(contact())}>Submit</button>
            {/* </form> */}
        </div>
    )
}

export default contactForm
