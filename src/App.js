import React from "react"

function App() {
  const [todos, setTodos] = React.useState([])
  function isDone(todo){
    if(todo.done == true) {
      return { textDecoration: "line-through", color: "green" }
    }
  }
  function addToDo(event) {
    event.preventDefault()
    const input = document.getElementsByTagName("input")[0]

    setTodos([...todos, { id: Math.random(), note: input.value, done: false }])
    input.value = "";
  }

  const strike = (todo)=>{
    setTodos(prev => 
      prev.map(el => {
        if(el.id == todo.id){
          return { ...el, done: true }
        }
        return el
      })
    )
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
          <li style={ isDone(todo) } key={todo.id} onClick={()=> strike(todo)}>
            {todo.note}
          </li>
         )
       })}
     </ul>
    </div>
  );
}

export default App;
