const Filter = ({ value, onChanges }) => {
    return (
        <div>
            find countries <input value={value} onChange={onChanges}></input>
        </div>
    )
}

export default Filter