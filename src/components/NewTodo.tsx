import {useRef, useContext} from "react"
import classes from './NewTodo.module.css'
import { TodosContext } from "../store/todos-context";


const NewTodo: React.FC = () => {

  const todosCtx = useContext(TodosContext);


  const todoTextInputRef = useRef<HTMLInputElement>(null); //found using mdn - input type element html, needs to set default vaue or else error

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value //.current is part of refs dom. ?  can be null. ! cannot be null. ! always has to not be null.

    if (enteredText.trim().length === 0) { //text validation
      //throw an error
      return;
    }


    todosCtx.addTodo(enteredText);
  }



  return (
  <form onSubmit={submitHandler} className={classes.form}>
    <label htmlFor='text'>Todo text</label>
    <input type='text' id="text" ref={todoTextInputRef}/>
    <button>Add Todo</button>
  </form>
  );
};

export default NewTodo;