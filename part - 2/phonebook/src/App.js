import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Header from './components/Header'
import AddPerson from './components/PersonForm'
import Filter from './components/Filter'
import axios from 'axios'

const emptyPerson = {
  name: '',
  number: ''
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState({...emptyPerson})
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3010/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()  
    
    const existingPerson = persons.filter((person) =>
        person.name === newPerson.name
    )

    if (existingPerson.length === 0) {
      setPersons(persons.concat(newPerson))
      setNewPerson({...emptyPerson})
    } else {
      window.alert(`${newPerson.name} is already added to the phonebook`)
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

  const personsToShow = filter !== '' ? 
    persons.filter(person => person.name.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) ) : persons 

  return (
    <div>
      <Header text="Phonebook"/>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <Header text="Add person"/>
      <AddPerson addPerson={addPerson} 
        newPerson={newPerson} 
        handlePersonNameChange={handlePersonNameChange} 
        handlePersonNumberChange={handlePersonNumberChange}/>
      
      <Header text="Numbers"/>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App