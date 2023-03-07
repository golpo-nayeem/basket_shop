const express = require('express');

const app = express();

const users =[];

app.use(express.json());

app.post('/users',(req, res)=>{
    const body = req.body;
    const name = body.name;
    const email = body.email;

    const user = users.find((x) => x.email === email);

    if(!user) {      
        users.push(body);
        return res.send(body);
    } 

    res.send('user already exists!');

})

app.get('/users', (req, res ) => {
    res.send(users);
})

app.patch('/update/:email', (req, res) =>{
    const name = req.body.name;
    const email =req.params.email;

    const user = users.find((x) => x.email === email);

    if(!user) return res.send('user not found!');

    users.name = name;

    res.send('successfully updated');
})

app.listen(3000, ()=>{
    console.log('server running on port 3000');
})