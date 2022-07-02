import React from 'react';




const ToDoList = ({toDoList, handleToggle, handleFilter}) => {

const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
      
        <ul>
        <li id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? "todo strike" : "todo"}>
            {todo.task}
        </li>
        </ul>
    );
};
    return (
        <div>
             <span style={{textAlign:"left", color:"red", fontSize:"12px"}}>* Click on the Task to mark as finished.<br/></span>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
           
            <button style={{margin: '20px'}} className ="btn-primary" onClick={handleFilter}>Clear Completed</button>
        </div>
    );
};

export default ToDoList;