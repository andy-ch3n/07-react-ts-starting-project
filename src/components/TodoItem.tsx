import React, {useContext} from 'react'
import classes from './TodoItem.module.css'
import { TodosContext } from "../store/todos-context";





const TodoItem: React.FC<{text: string, onRemoveTodo: () => void}> = (props) => {
  const todosCtx = useContext(TodosContext);

  return (
    <li onClick={props.onRemoveTodo} className={classes.item}>{props.text}</li>
  )
}

export default TodoItem