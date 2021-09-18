import React from "react"

function App() {
  const [todos, setTodos] = React.useState([])

  function addToDo(event) {
    event.preventDefault()
    const input = document.getElementsByTagName("input")[0]

    setTodos([...todos, input.value])
    input.value = "";
  }

  
  return (
    <div>
      <h1>My todo</h1>
      <form>
      
      <input/>
       <button onClick={addToDo}>Add ToDo</button>
      </form>
      
     <ul>
       {todos.map((todo)=>{
         return (
           <li>{todo}</li>
         )
       })}
      
     </ul>
    </div>
  );
}

export default App;
