const CountryInfo = ({ country }) => {
    return (
        <div>
            <h1>{country.name.common}</h1>

            <div>{country.capital}</div>
            <div>area: {country.area}</div>

            <div>
                <b>languages:</b>
                <ul>
                    {Object.entries(country.languages).map(([code, name]) => (
                        <li key={code}>{name}</li>
                    ))}
                </ul>
            </div>


            <img src={country.flags.png} alt="Country flag"></img>
        </div>
    )
}

export default CountryInfo