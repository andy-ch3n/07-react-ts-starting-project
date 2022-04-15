import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);

  // const addTodoHandler = (todoText: string) => {
  //   const newTodo = new Todo(todoText);

  //   setTodos((prevTodos) => {
  //     return prevTodos.concat(newTodo) //concat creates a new array here, or use spread operator ?
  //   })
  // };


  // const removeTodoHandler = (todoId: string) => {
  //   setTodos((prevTodos) => {
  //     return prevTodos.filter(todo => todo.id !== todoId)
  //   });
  // }


  return (
    <div>
      <NewTodo />
      <Todos />
    </div>
  );
}

export default App;
