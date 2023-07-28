const Total = (props) => {
    return <p>
        <b>
            Total of {props.parts.reduce((a, c) => a + c.exercises, 0)} exercises
        </b>
    </p>
}

export default Total