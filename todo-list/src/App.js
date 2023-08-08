import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import React, { useEffect, useState } from 'react';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import {
  BrowserRouter as Router,
  Route,Routes

} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }

  const onDelete = (todo) => {
    console.log('i am on delete', todo);
    setTodos(todos.filter((e) => e !== todo));
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const useAddTodo = (title, time) => {
    console.log('i am adding todo', title, time);
    let sno;
    if (todos.length !== 0) {
      sno = todos[todos.length - 1].sno + 1;
    } else {
      sno = 0;
    }

    const myTodo = {
      sno: sno,
      title: title,
      time: time,
    };

    setTodos([...todos, myTodo]);
    console.log(myTodo);
    
  };

  

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
    <>
      <Header title="MyTodo List" />
      <Routes>
          <Route exact path="/" element={<React.Fragment><AddTodo addTodo={useAddTodo} /><Todos todos={todos} onDelete={onDelete} /></React.Fragment>} />
          <Route  exact path="/about" element={<About />} />
        </Routes>

        
      <Footer />
    </>
    </Router>
  );
}

export default App;
