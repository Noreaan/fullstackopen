import { useState } from 'react'
import Persons from './components/Persons'
import Header from './components/Header'
import AddPerson from './components/PersonForm'
import Filter from './components/Filter'

const emptyPerson = {
  name: '',
  number: ''
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newPerson, setNewPerson] = useState({...emptyPerson})
  const [filter, setFilter] = useState('')

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