const express = require('express');
const { PrismaClient } = require('@prisma/client')
const cors = require('cors');


const prisma = new PrismaClient()
const app = express();

app.use(cors());
app.use(express.json())



app.get('/todos', async (request, responce) => {
    try {
        todos = await prisma.todo.findMany()
        resData = { "todos": todos }
        console.log(resData);
        return responce.send(JSON.stringify(resData))
    } catch (err) {
        console.log(err)
        return responce.sendStatus(404)
    }

})

app.post('/todos', async (req, res) => {
    const { name, done } = req.body
    console.log(name + ' ' + done)
    try {
        await prisma.todo.create({
            data: {
                name: name,
                done: done
            }
        })
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }

})

app.put('/todos/:id', async (req, responce) => {
    const { id } = req.params
    const { done } = req.body
    try {
        await prisma.todo.update({
            where: { id: Number(id) },
            data: {
                done: done
            }
        })
        responce.sendStatus(200);
    } catch (err) {
        console.log(err);
        responce.sendStatus(400);
    }

})

app.delete(`/todos/:id`, async (req, res) => {
    const { id } = req.params

    try {
        const post = await prisma.todo.delete({
            where: {
                id: Number(id),
            },
        })
        res.json(post)
    } catch {
        res.sendStatus(400);
    }
})

app.listen(7777, (err) => {
    if (!err) console.log('启动成功')
})



