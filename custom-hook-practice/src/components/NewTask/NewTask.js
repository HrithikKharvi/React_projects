import { useState } from 'react';
import useHttp from '../../customHooks/use-getdata';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const { isLoading, error, sendRequest } = useHttp();
  const manageData = (taskText, data) => {
      const generatedId = data.name;
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    }

  const enterTaskHandler = async (taskText) => {

      const httpConfig = {"url" : "https://sample-backend-64c8c-default-rtdb.firebaseio.com/tasks.json",
                        "method" : "POST",
                        "headers" : {
                          'Content-Type': 'application/json',
                        },
                        "body" : { text: taskText }
                      }
    sendRequest(httpConfig, manageData.bind(null, taskText));
  }
  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
