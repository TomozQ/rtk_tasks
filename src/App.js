import React from 'react';
import './App.css';
import TaskList from './features/task/TaskList';

import { FaSignInAlt } from "react-icons/fa"
import TaskDetails from './features/task/TaskDetails';
import TaskInput from './features/task/TaskInput';
import Header from './features/login/Header';

function App() {
  const Logout = () => {
    localStorage.removeItem('localJWT')
    window.location.href = '/'
  }
  return (
    <div className='cotnainerTasks'>
      <div className='appTasks'>
        <button onClick={ Logout } className='signBtn'>
          <FaSignInAlt />
        </button>
        <Header/>
        <TaskInput />
        <TaskList />
      </div>
      <div className='appDetails'>
        <TaskDetails />
      </div>
    </div>
  );
}

export default App;
