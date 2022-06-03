const Task = require('../models/task')
const asyncWrapper = require('../middleware/async')
const getAllTasks = asyncWrapper( async (req,res) =>{
    //res.send("all items are good")
   // try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
   // } catch (error) {
       // res.status(500).json({msg:error})
   // }
})

const createTask = asyncWrapper(async (req,res) => {
 //try {
     const task = await Task.create(req.body)
     res.status(200).json({task})
 //} catch (error) {
   //  res.status(500).json({msg:error})
 //}
   //const task = await Task.post(req.body)
    //res.status(201).json({task})
})

const getTask = asyncWrapper(async (req,res) => {
    //res.json({id:req.params.id})
  //  try {
        const {id:taskid} = req.params
        const task = await Task.findOne({_id:taskid})
        res.status(200).json({task})
        if(!task){
            res.status(404).json({msg:`there is no id ${task}`})
        }
   // } catch (err) {
       // res.status(500).json({msg:err})
  //  }
})

const updateTask = asyncWrapper(async (req,res) => {
  //  try {
        const {id:taskid} = req.params
        const task = await Task.findByIdAndUpdate({_id:taskid},req.body,{new:true,runValidaters:true}
            )
        if(!task){
            res.status(500).json({msg:`no task found ${task}`})
        }
        res.status(200).json({task})
    //} catch (error) {
      //  res.status(500).json({msg:error})
    //}
   // res.send("update task")
})

const deleteTask = asyncWrapper(async(req,res) => {
   // try {
        const {id:TaskId} = req.params
        const task = await Task.findByIdAndDelete({_id:TaskId})
        if(!task){
            res.status(404).json({msg:`no task with id : ${task}`})
        }
        res.status(200).json({task})
  //  } catch (error) {
        res.status(500).json({msg:error})
  //  }
   // res.send("delete task")
})
module.exports = {getAllTasks,createTask,getTask,updateTask,deleteTask}