const { todo } = require("./db");
const{ createTodo, updateTdo } = require("./types");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({
    origin : "http:/localhost:5173"
}));
app.use(express.json());

app.post("/todo", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)

    if(!parsedPayload.success){
        res.status(411).json({
            message : "You send wrong inputs"
        })
        return
    }
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })
    res.json({
        message : "Todo has been created."
    })
});


app.get("/todos", async(req, res) => {
    const getTodos = await todo.find()
    res.json({
        todos : getTodos
    })
});


app.put("/completed", async(req, res) => {
    const payload = req.body;
    const parsedPayload = updateTdo.safeParse(payload);

    if(!parsedPayload.success){
        res.status(411).json({
            message : "You sent wrong input."
        })
        return;
    }
    await todo.update({
        _id : req.body.id
    }, {
        completed : true
    })
    res.json("Todo has been updated.")
})








app.listen(3000);