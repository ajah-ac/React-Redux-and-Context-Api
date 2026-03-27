
 import { Trash } from "lucide-react"
const Todo = ({ complete, id, text,dispatch }) => {
    return (
        <>

            <input type='checkbox'
checked={complete}
                onChange={() => { }} />
            <p style={{ textDecoration: complete ? 'line-through' : 'none' }}>{text}</p>
            <button onClick={() => { dispatch({type:'delete',payload:id})}}>
                <Trash />
            </button>
        </>
    )
}

export default Todo