import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

const Todo = () => {
  
  const title = useRef()
  const description = useRef()
  const [data , setData] = useState([])
  const [loading , setLoading] = useState(true)
  const [error , setError] = useState(false)
  // const [addingTodo, setAddingTodo] = useState(false)

  useEffect(()=>{

    axios("http://localhost:3000/api/v1/todos")
    .then((res) => {
      console.log(res.data.todos);
      setData(res.data.todos);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setLoading(false);
    });
  } , [])

  const addTodo = async (event)=>{
    event.preventDefault()
    console.log(title.current.value);
    console.log(description.current.value);

    try {
      const respose = await axios.post("http://localhost:3000/api/v1/todo" , 
        {
          title: title.current.value,
          description: description.current.value
        }
      )
      console.log(respose.data);
    } catch (error) {
      console.log(error);
      
    }

  
    
  }
  

  return (
    <>
    <div>
    <h1 className='text-center mt-7 font-serif font-bold text-2xl'>Todo App</h1>
    
      <form onSubmit={addTodo} className='flex justify-center items-center flex-col mt-6 gap-5'>

      <input className='input input-bordered w-full max-w-xs' type="text" placeholder='Enter todo' ref={title}/>

      <textarea placeholder='Enter Description' className='textarea 
      textarea-bordered textarea-lg w-full max-w-xs' ref={description}></textarea>
      
      <button className="btn btn-neutral">Add Todo</button>
      </form>
    </div>
    
    {loading && <h1>Loading...</h1>}
      {error && <h1>error occured</h1>}
      {data ? (
        data.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button onClick={() => deleteUser(item.id)}>delete</button>
            </div>
          );
        })
      ) : (
        <h1>No data found</h1>
      )}
    </>
  )
}

export default Todo