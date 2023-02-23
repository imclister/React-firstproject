export const Todos = (props) =>
{
    return(
        <h2>
            <span style={{color: props.todoStatus === "Completed" ? "green" : "black" }}>{props.todoID} {props.todoTask}  {props.todoStatus}</span> 
            <button className="btn btn-success mx-2" onClick={ () => {props.completeTodo(props.todoID) } }>/</button>
            <button className='btn btn-danger text-white' onClick={ () => props.deleteTodo(props.todoID)}>x</button>
        </h2>
    ) ;
}

