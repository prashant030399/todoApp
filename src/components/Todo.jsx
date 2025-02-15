import {useState, useEffect} from 'react'


import "./Todo.css";
import { TodoForm} from "./TodoForm" ;
import { TodoList} from "./TodoList" ;
import { TodoDate} from "./TodoDate" ;
import { 
    getLocalStorageTodoData,
    setLocalStorageTodoData,
} from "./TodoLocalStorage";




export const Todo = () => {

const [inputValue , setInputValue] = useState({});

const [task , setTask] = useState(() => getLocalStorageTodoData());

const handleInputChange = (value) => {
    setInputValue(value);
};


const handleFormSubmit = (inputValue) => {
const {id, content, checked} = inputValue ;

if(!content) return ;    // if input is empty it would return // to check if input field is empty or not
// if(task.includes(inputValue))  return ;  //if element is already there in the array[task] , it would not take it  // if java, we write contains instead of includes

const ifTodoContentMatched = task.find( 
    (curTask) => curTask.content === content
 );

 if(ifTodoContentMatched) return ;

setTask((prevTask) => [...prevTask, {id, content, checked} ]);     // .... is spread  operator 
}; 


//todo add data to localStorage

setLocalStorageTodoData(task);








//todo Date and Time


//todo handleDeleteTodo function  - Day 3
const handleDeleteTodo  = (value) => {

const updatedTask = task.filter((curTask) => curTask.content !== value);
setTask(updatedTask);

};


//todo handleClearTodoData funtionality
const handleClearTodoData = () => {
setTask([]);
};

//todo handleClearTodoData funtionality
const handleCheckedTodo = (content) => {
const updatedTask = task.map((curTask) => {
    if(curTask.content === content ){
        return {...curTask, checked: !curTask.checked};
    }else {
        return curTask ;
    }
});
setTask(updatedTask);
} ;



    return( 
    <section className="todo-container">
<header>
    <h1>Todo List</h1>
    < TodoDate/>
</header>

<TodoForm   onAddTodo ={handleFormSubmit} />

<section className="myUnOrdList">
<ul>
    {task.map((curTask) => {
        return (
         <TodoList 
         key ={curTask.id} 
         data={curTask.content} 
         checked ={curTask.checked}
         onHandleDeleteTodo = {handleDeleteTodo}
         onHandleCheckedTodo = {handleCheckedTodo}
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