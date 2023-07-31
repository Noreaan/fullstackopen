import { useState, useEffect } from 'react'
import countryService from './services/countryService'
import Filter from './component/Filter'
import CountryList from './component/CountryList'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterValue, setFilter] = useState('')

  useEffect(() => {
    countryService
      .getAll()
      .then(countriesResponse => setCountries(countriesResponse))
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const filteredCountries = filterValue ? countries.filter(x => x.name.common.toLowerCase().startsWith(filterValue.toLowerCase())) : countries

  return (
    <div>
      <h1>Countries info</h1>
      <Filter value={filterValue} onChanges={handleFilterChange}></Filter>
      <CountryList countries={filteredCountries} setFilter={setFilter}></CountryList>
    </div>
  )
}

export default App;
