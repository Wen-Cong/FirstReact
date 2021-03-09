import Header from './components/Header';
import Tasks from './components/Tasks'
import './App.css';
import ContactForm from './components/ContactForm';
import React from 'react'

function App() {
  const [showForm, setShowForm] = React.useState(false)
  let formOnShow = () => {
    setShowForm(!showForm)
  }

  const [contactList, setContactList] = React.useState([  
    {id:"0", name:"Ram", email:"Ram@gmail.com"},  
    {id:"1", name:"Bob", email:"bob32@gmail.com"},
    {id:"2", name:"Peter", email:"P@gmail.com"},  
    {id:"3", name:"Ian", email:"Ian@gmail.com"}
  ])
  let onDelete = (id) => {
    setContactList(contactList.filter((contact) => (contact.id !== id)))
  }

  const [contact, setcontact] = React.useState('')
  let onAdd = () => {
    setContactList(...contactList, contact)
  }

  return (
    <div className="App">
      <Header onFormShow={formOnShow} formIsShown={showForm}/>
      {showForm && (<ContactForm onAdd={onAdd} setContact={setcontact} />)}
      <Tasks className='tasks' contactList={contactList} onDelete={onDelete}/>
    </div>
  );
}

export default App;
