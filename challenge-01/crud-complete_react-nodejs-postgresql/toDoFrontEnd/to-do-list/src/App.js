// import logo from './logo.svg';
import './App.css';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const arrayTodos = [
  { name: "Limpar a Casa", status: false },
  { name: "Limpar o Cachorro", status: false }
];

const Todos = ({ todos }) => {
    return (
      <div className="todos">
        {todos.map((todo) => {
          return (
            <div className="todo">
              <button
                className="checkbox"
                style={{ backgroundColor: todo.status ? "#A879E6" : "white" }}
              ></button>
              <p>{todo.name}</p>
              <button>
                <AiOutlineEdit  size={20} color={"#64697b"}></AiOutlineEdit>
              </button>
              <button>
                <AiOutlineDelete  size={20} color={"#64697b"}></AiOutlineDelete>
              </button>
            </div>
          );
        })}
      </div>
    );
  };

function App() {
  return (
    <div className="App">
      <header className="container">
        <div className="header">
          <h1>My To Do List</h1>
        </div>
        <Todos todos={arrayTodos}></Todos>
      </header>
    </div>
  );
}

export default App;
