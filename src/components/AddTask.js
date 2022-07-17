import React from 'react'

const AddTask = () => {
  return (
    <form className='add-form'>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder="Add a Task"/>
        </div>
        <div className='form-control'>
            <label>Day and Time</label>
            <input type='text' placeholder="Add a Day and Time"/>
        </div>
        <div className='form-control'>
            <label>Set Reminder</label>
            <input type='checkbox'/>
        </div>
        <input type="submit" value="Save Task"/>
    </form>
  )
}

export default AddTask
