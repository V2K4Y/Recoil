import express from "express";
import cors from 'cors';
import { TODO } from "./src/todo.js";

const app = express();

app.use(cors());
app.get('/notifications', (req, res) => {
    res.json({
        network: Math.floor(Math.random()*120),
        jobs: Math.floor(Math.random()*120),
        messages: Math.floor(Math.random()*120),
        notifications: Math.floor(Math.random()*120),
    });
})
app.get('/todos', (req, res) => {
    const id = req.query.id;
    const todo = TODO;
    if(id >0 && id < 8) return res.json(todo[id - 1]);
    return res.json(todo[0]);
})
app.listen(3001,()=> console.log('listening on 3001'))