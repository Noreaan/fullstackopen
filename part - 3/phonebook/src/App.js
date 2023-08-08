import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Header from './components/Header'
import AddPerson from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/personService'

import './index.css'
import Notification from './components/Notifications'

const emptyPerson = {
  name: '',
  number: ''
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState({...emptyPerson})
  const [filter, setFilter] = useState('')
  const [notificationMessage, setNotificationMessage] = useState()

  useEffect(() => {
    personService
      .getAll()
      .then(persons => {
        setPersons(persons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()  
    
    const existingPerson = persons.find((person) =>
        person.name === newPerson.name
    )

    if (!existingPerson) {
      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewPerson({...emptyPerson})
          showMessage(`Added ${returnedPerson.name}`)
        })
        .catch(error => {
          showMessage(error.response.data.error, false)
        })
    } else {
      if (window.confirm(`${existingPerson.name} is already added to the phonebook, replace the old number with a new one?`)) {
        personService
          .update(existingPerson.id, {...existingPerson, number: newPerson.number})
          .then(returnedPerson => {
            setPersons(persons.map(x => x.id !== existingPerson.id ? x : returnedPerson))
            setNewPerson({...emptyPerson})
            showMessage(`Updated ${returnedPerson.name}`)
          })
      }
    }
  }

  const deletePerson = (id) => {
    const person = persons.find(x => x.id === id)

    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter(x => x.id !== id))
          showMessage(`Removed ${person.name}`)
        })
    }
  }

  const handlePersonNameChange = (event) => {
    setNewPerson({...newPerson, name: event.target.value})
  }

  const handlePersonNumberChange = (event) => {
    setNewPerson({...newPerson, number: event.target.value})
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const showMessage = (message, success = true) => {
    setNotificationMessage({ message, success })

    setTimeout(() => {
      setNotificationMessage()
    }, 5000)
  }

  const personsToShow = filter !== '' ? 
    persons.filter(person => person.name.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) ) : persons 

  return (
    <div>
      <Header text="Phonebook"/>
      <Notification message={notificationMessage?.message} success={notificationMessage?.success}></Notification>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <Header text="Add person"/>
      <AddPerson addPerson={addPerson} 
        newPerson={newPerson} 
        handlePersonNameChange={handlePersonNameChange} 
        handlePersonNumberChange={handlePersonNumberChange}/>
      
      <Header text="Numbers"/>
      <Persons persons={personsToShow} deletePerson={deletePerson}/>
    </div>
  )
}

export default App