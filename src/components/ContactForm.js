import React from 'react'
import './ContactForm.css';

class contact {
    constructor(name, email) {
        this.id = (Math.floor(Math.random * 1000) + 1).toString()
        this.name = name;
        this.email = email;
      }
}
const contactForm = (props) => {
    let addContact = () => {
        let c = new contact(document.getElementById('fname').value, document.getElementById('email').value)
        props.setContact(JSON.stringify(c).then(() => props.onAdd))
        
    }
    return (
        <div>
            <form className='form'>
                <label for="fname">Name: </label>
                <input type="text" id="fname" name="firstname" placeholder="Name" className='form-control' />
                <label for="email">Email: </label>
                <input type="text" id="email" name="email" placeholder="Email" className='form-control' />
                <button className='btn btn-black' onClick={addContact}>Submit</button>
            </form>
        </div>
    )
}

export default contactForm
