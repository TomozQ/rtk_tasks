import React from 'react'
import { BsTrash } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { fetchAsyncDelete, selectTask, editTask } from './taskSlice'

const TaskItem = ( { task } ) => {
  const dispatch = useDispatch()

  return (
    <li className='listItem'>
      <span 
        className='cursor'
        onClick={() => dispatch(selectTask(task))}
        >
          { task.title }
        </span>
        <div>
          <button
            onClick={() => dispatch(fetchAsyncDelete(task.id))}
            className='taskIcon'
          >
            <BsTrash />
          </button>
          <button
            onClick={() => dispatch(editTask(task))}
            className='taskIcon'
          >
            <FaEdit />
          </button>
        </div>
    </li>
  )
}

export default TaskItem
