import React from "react";
import { Button, Input, InputLabel, FormControl} from "@material-ui/core";
import "./App.css";
import Todo from "./Todo"

function App() {
  //state for the todo list
  const [todos, setTodos] = React.useState(["walk Leo","walk Lucy","walk The Dogs"]);
  // state for the new todo item
  const [input, setInput] = React.useState("");
  console.log("🟥 " + input);

  //adds the new list item to the list
  const addTodo = (e) => {
    //prevents page refresh when button is submited and deletes the state memory
    e.preventDefault();
    setTodos([...todos, input]);
    //clears the input field
    setInput("");
  };
    const addNewTodo = (e)=> setInput(e.target.value)
    
  return (
    <div className="App">
      <h1>ToDo List</h1>
  {/* the form added to allow the button to submit when hit enter */}
      <form>
          <FormControl>
            <InputLabel>🔳 Add a Todo</InputLabel>
            <Input value={input} label="Outlined primary" onChange={addNewTodo} />
          </FormControl>

          {/* disabled: disable adding null value */}
          <Button variant="contained" disabled={!input} color="primary" type="submit" onClick={addTodo} >Add ToDos</Button>
      </form>

      <ul>
        {
          todos.map(todo => (
            <Todo text={todo} />
              
            ))}
      </ul>
    </div>
  );
}

export default App;

 