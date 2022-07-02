import React, { useState, useEffect } from "react";
import WeatherCard from "../components/weatherCard";
//mock data
import Listdata from "../components/data.json";
//components
import ToDoList from "../components/ToDoList";
import ToDoForm from '../components/ToDoForm';
import Report from "./report";


export default function Tools() {
  const [data, setData] = useState([]);
  const [weathError, showWeathError] = useState(false);
  const [ toDoList, setToDoList ] = useState(Listdata);

  useEffect(() => {
    showWeathError(false);
    const fetchData = async () => {
       await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=44.389355&lon=-79.690331&units=metric&APPID=6a07e24be765a5cefd9594f42f65d19e`)
      //await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=44.389355&lon=-79.690331&units=metric&APPID=92ad8d24c25849a4bd4e688a9a31031e`)
      .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, []);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }
  
  return (
    <>
    <div className="bgImage1"><br/>
        <h1 className="animate__animated animate__slideInLeft">Tools</h1><br/><br/>
        <div className="container-fluid p-0">
        <div className="row g-0">
        <div className="col-lg-5 col-sm-6" style={{padding:"0 2%"}}>
           <div className="container pb-5">
            <h4 className="font-weight-bold head4">Weather Application</h4>
             <div className="align-items-center justify-content-center">
            <WeatherCard weatherData={data} showError={showWeathError} error={weathError} />
            </div>
            </div>
            <Report/>
         </div>
          <div className="col-lg-7 col-sm-6 responsiveApp" style={{padding:"2%",width:"57%", border:"1px solid black"}}>
          <h4 className="font-weight-bold head4">To-Do Application</h4>
         
            <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
            <ToDoForm addTask={addTask}/>

          </div>
          
        </div>
        </div>

        </div>

    
     
    </>
  );
}
