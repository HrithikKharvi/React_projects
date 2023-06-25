import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './customHooks/use-getdata';

function App() {
  const [tasks, setTasks] = useState([]);

  const {isLoading,error,sendRequest:fetchTasks} = useHttp();

  useEffect(() => {
    const httpConfig = {"url":""}
    const manageData = (data) =>{
      const loadedTasks = [];
      console.log("printing data ", data);
      
      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }
      setTasks(loadedTasks);
   }
   fetchTasks(httpConfig, manageData);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
