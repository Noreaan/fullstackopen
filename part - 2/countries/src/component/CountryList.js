import CountryInfo from "./CountryInfo"

const CountryList = ({ countries, setFilter }) => {

    if (countries.length > 10) {
        return (
            <div>
                Too many matches, specify another filter.
            </div>
        )
    } else if (countries.length > 1 && countries.length <= 10) {
        return (
            <ul>
                {
                    countries.map((country, i) => <li key={i}>{country.name.common} <button onClick={() => setFilter(country.name.common)}>active</button></li>)
                }
            </ul>
        )
    } else if (countries.length === 1) {
        return (
            <CountryInfo country={countries[0]}></CountryInfo>
        )
    }
}

export default CountryList