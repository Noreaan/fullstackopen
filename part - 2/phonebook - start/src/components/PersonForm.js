const AddPerson = ({ addPerson, newPerson, handlePersonNameChange, handlePersonNumberChange }) => {
    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input value={newPerson.name} onChange={handlePersonNameChange} />
                number: <input value={newPerson.number} onChange={handlePersonNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default AddPerson