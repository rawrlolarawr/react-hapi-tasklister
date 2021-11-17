import '../styles/Task.css'

const Task = props => {
    return ( 
        <li className='Task' key={props.childKey}> {props.content} <button onClick={(e) => props.handleSubmit(e, props.childKey)}>X</button>
        </li>
    )
}

export default Task