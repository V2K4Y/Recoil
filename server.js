import express from "express";
import cors from 'cors';

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
app.listen(3001,()=> console.log('listening on 3001'))