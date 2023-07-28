import Part from "./Part"

const Content = (props) => {
    return (
        <div>
            {props.parts.map((x) => <Part key={x.id} name={x.name} exercises={x.exercises} />)}
        </div>
    )
}

export default Content