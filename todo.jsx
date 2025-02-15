import {useState, useEffect} from 'react'

import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import "./Todo.css";
export const Todo = () => {

const [inputValue , setInputValue] = useState("");
const [task , setTask] = useState([]);
const [dateTime, setDateTime] = useState("");

const handleInputChange = (value) => {
    setInputValue(value);
};


const handleFormSubmit = (event) => {
    event.preventDefault();

if(!inputValue) return ;    // if input is empty it would return 

if(task.includes(inputValue)){  //if element is already there in the array[task] , it would not take it  // if java, we write contains instead of includes
    setInputValue("")
    return ; 
} 


setTask((prevTask) => [...prevTask, inputValue]);     // .... is spread  operator 

setInputValue("")  //if element is taken ,, set to default for input of next element

}; 

//todo Date and Time
useEffect(() => {
const interval = setInterval( () => {
    const now = new Date();
const formattedDate = now.toLocaleDateString();
const formattedTime = now.toLocaleTimeString();

setDateTime(`${formattedDate} - ${formattedTime}`);
},1000);

return () => clearInterval(interval);
},[]);

//todo handleDeleteTodo function  - Day 3
const handleDeleteTodo  = (value) => {
console.log(task);
console.log(value); 
const updatedTask = task.filter((curTask) => curTask !== value);
setTask(updatedTask);

};


//todo handleClearTodoData funtionality
const handleClearTodoData = () => {
setTask([]);
};



    return( 
    <section className="todo-container">
<header>
    <h1>Todo List</h1>
    <h2 className="data-time"> {dateTime}</h2>
</header>
<section>
    <form onSubmit={handleFormSubmit}>
        <div>
            <input type= "text" 
            className="todo-input"  
            autoComplete="off"
            value={inputValue}
            onChange={(event) => handleInputChange(event.target.value)}
            />
        </div>
        <div>
            <button type="submit" className="todo-btn">
                Add Task
                </button>
        </div>
    </form>
</section>



<section className="myUnOrdList">
<ul>
    {task.map((curTask, index) => {
        return (
            <li key ={index} className="todo-item">
                <span>{curTask}</span>
                <button className="check-btn">
                    <FaCheck />
                </button>
                <button className="delete-btn"  onClick={() => handleDeleteTodo(curTask)}>
                <MdDelete />
                </button>
            </li>
        );
    })}
</ul>

</section>



<section>
    <button className="clear-btn" onClick={handleClearTodoData} >Clear All</button>
</section>



    </section>
    );
}



-------------------------------------------

After day 4  

import {useState, useEffect} from 'react'

import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import "./Todo.css";
import { TodoForm} from "./TodoForm" ;
import { TodoList} from "./TodoList" ;
import { TodoDate} from "./TodoDate" ;

export const Todo = () => {

const [inputValue , setInputValue] = useState("");
const [task , setTask] = useState([]);


const handleInputChange = (value) => {
    setInputValue(value);
};


const handleFormSubmit = (inputValue) => {
if(!inputValue) return ;    // if input is empty it would return 
if(task.includes(inputValue))  return ;  //if element is already there in the array[task] , it would not take it  // if java, we write contains instead of includes
setTask((prevTask) => [...prevTask, inputValue]);     // .... is spread  operator 
}; 

//todo Date and Time


//todo handleDeleteTodo function  - Day 3
const handleDeleteTodo  = (value) => {
console.log(task);
console.log(value); 
const updatedTask = task.filter((curTask) => curTask !== value);
setTask(updatedTask);

};


//todo handleClearTodoData funtionality
const handleClearTodoData = () => {
setTask([]);
};



    return( 
    <section className="todo-container">
<header>
    <h1>Todo List</h1>
    < TodoDate/>
</header>

<TodoForm   onAddTodo ={handleFormSubmit} />

<section className="myUnOrdList">
<ul>
    {task.map((curTask, index) => {
        return (
         <TodoList 
         key ={index} 
         data={curTask} 
         onHandleDeleteTodo = {handleDeleteTodo}
         />
        );
    })}
</ul>

</section>



<section>
    <button className="clear-btn" onClick={handleClearTodoData} >Clear All</button>
</section>



    </section>
    );
}


--------------------

prashtodoapp.netlify.app

prashantweather.netlify.app

ssh-keygen -t rsa -b 4096 -C "prashantdewangan789@gmail.com"
