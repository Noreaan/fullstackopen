import Weather from './Weather'

const CountryInfo = ({ country }) => {
    return (
        <div>
            <h1>{country.name.common}</h1>

            <p>{country.capital}</p>
            <p>area: {country.area}</p>

            <h2>languages:</h2>
            <ul>
                {Object.entries(country.languages).map(([code, name]) => (
                    <li key={code}>{name}</li>
                ))}
            </ul>

            <img src={country.flags.png} alt="Country flag"></img>
            
            <Weather capital={country.capital}></Weather>
        </div>
    )
}

export default CountryInfo