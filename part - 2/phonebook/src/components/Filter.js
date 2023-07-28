const Filter = ({ filter, handleFilterChange }) => {
    return (
        <div>
            filter on name <input value={filter} onChange={handleFilterChange} />
        </div>
    )
}

export default Filter