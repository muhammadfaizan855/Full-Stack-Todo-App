import mongoose from "mongoose";
import Todos from "../models/todos.models.js";

// add Todo

const addTodo = (req , res) => {
   const { title, description } = req.body;

   if(!title || !description){
   res.status(400).json({
    message: "Title or description is required"
   })
   return
} 

const todo = Todos.create({
    title,
    description,
})

res.status(201).json({
  message: "Todo added successfully",
})

}




// get All Todo


const getAllTodo = async (req , res) => {
   const todos = await Todos.find({})
   res.status(200).json({
      todos: todos,
   })
}




// get Single Todo


const getSingleTodo = async (req , res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
   return res.status(400).json({ error: "Not valid Id" });
 }

 const todo = await Todos.findById(id)
 
 if(!todo){
   res.status(400).json({
      message: "No Todo Found",
   })
   return
 }

 res.status(200).json(todo)
}


// Delete Todo

const deleteTodo = async (req , res) => {
   const { id } = req.params;
 
   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Not valid Id" });
  }

  const todo = await Todos.findOneAndDelete({ _id: id })

  if(!todo){
   return res.status(404).json({
      error: "No Todo Found!"
   })
  }

  res.status(200).json({
   message: "Todo Deleted SuccessFully",
   todo,
  })
}




// Edit Todo



const editTodo = async (req ,res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
   return res.status(400).json({ error : "Not Valid id"})
  }
 
  const todo = await Todos.findOneAndUpdate(
   { _id: id},
   {
      ...req.body,
   }
  );

  if(!todo){
   return res.status(400).json({
      error:  "No Todo Found"
   })
  }

  res.status(todo)
}










 
export { addTodo, getAllTodo , getSingleTodo , deleteTodo, editTodo }
