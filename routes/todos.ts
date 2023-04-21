import { Router } from "express";
import {Todo} from '../models/todos';

const router = Router();

const todos: Todo[] = [];

router.get('/' , (req,res,next)=>{
    res.status(200).json({todos:todos});
})

router.post('/todo',(req,res,next)=>{
    const newTodo : Todo ={
        id : new Date().toISOString(),
        text : req.body.text
    }
    todos.push(newTodo);
    res.status(200).json({message:`added with id ${newTodo.id}`});
})

router.post(`/del-todo/:id`,(req,res,next)=>{
    const id : string = req.body.id;
    let status: boolean = true;
    for(let i in todos){
        if(todos[i].id === id){
            delete todos[i]
            status = false;
            res.status(200).json({message : "element deleted"});
        }
    }
    if(status){
        res.status(400).json({message:"not present"});
    }


})

export default router;