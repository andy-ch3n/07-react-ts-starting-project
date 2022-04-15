import React, {useContext} from 'react'
import TodoItem from './TodoItem'
import Todo from '../models/todo'
import classes from './Todos.module.css'
import { TodosContext } from '../store/todos-context'

const Todos: React.FC<{items: Todo[]; onRemoveTodo: (id: string) => void }> = (props) => {

 const todosCtx =  useContext(TodosContext);


  return (
    <ul className={classes.todos}>
     {todosCtx.items.map((item) => (

       <TodoItem key={item.id} text={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}/>

       ))}
    </ul>
  )
}


export default Todos