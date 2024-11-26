import React from 'react'

const Todo = () => {
  return (
    <>
    <div>
    <h1 className='text-center mt-7 font-serif font-bold text-2xl'>Todo App</h1>
    <div className='flex justify-center items-center flex-col mt-6 gap-5'>
      <input className='input input-bordered w-full max-w-xs' type="text" placeholder='Enter todo '/>
      <textarea placeholder='Enter Description' className='textarea textarea-bordered textarea-lg w-full max-w-xs'></textarea>
      <button className="btn btn-neutral">Add Todo</button>
    </div>
    </div>

    </>
  )
}

export default Todo