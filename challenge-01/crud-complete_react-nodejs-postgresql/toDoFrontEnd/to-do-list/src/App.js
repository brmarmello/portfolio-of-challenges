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
              <p>{todo.name}</p>
              <button>
                <AiOutlineEdit></AiOutlineEdit>
              </button>
              <button>
                <AiOutlineDelete></AiOutlineDelete>
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
        <Todos todos={arrayTodos}></Todos>
      </header>
    </div>
  );
}

export default App;
