// import logo from './logo.svg';
import './App.css';

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
              {/* <button
                onClick={() => modifyStatusTodo(todo)}
                className="checkbox"
                style={{ backgroundColor: todo.status ? "#A879E6" : "white" }}
              ></button> */}
              <p>{todo.name}</p>
              {/* <button onClick={() => handleWithEditButtonClick(todo)}>
                <AiOutlineEdit size={20} color={"#64697b"}></AiOutlineEdit>
              </button>
              <button onClick={() => deleteTodo(todo)}>
                <AiOutlineDelete size={20} color={"#64697b"}></AiOutlineDelete>
              </button> */}
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
