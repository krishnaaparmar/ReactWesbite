
import { useReducer } from "react";
const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
  {
    id: 3,
    title: "Todo 3",
    complete: false,
  },
  {
    id: 4,
    title: "Todo 4",
    complete: false,
  }
];


const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export default function Report() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
    <h4 style={{textAlign:"left", marginLeft:"8%"}}>Checklist using useReducer</h4>
    <div className="bg reportResponsive" style={{width:"80%",marginLeft:"8%"}}>
    
      {todos.map((todo) => (
        <div key={todo.id} style={{textAlign:"left", marginLeft:"5%"}}>
         
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}/>
             <label style={{marginLeft:"10px"}}>{todo.title}
          </label>
        </div>
      ))}
      </div>
    </>
  );
}
