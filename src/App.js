import Todolist from "./Todolist";
function App() {
  return (
    <>    
      <Todolist/>
      <input type = "text"/>
      <button>Add Todo</button>
      <button>Clear Completed Todos</button>
      
      <div>0 left to do</div>
      
    </>
    )
  
}

export default App;
