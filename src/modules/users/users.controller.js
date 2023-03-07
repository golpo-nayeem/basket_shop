const users =[];

function getUsers(req, res) {
    res.send(users);
}
function createUsers(req, res) {
    const body = req.body;
    const name = body.name;
    const email = body.email;

    const user = users.find((x) => x.email === email);

    if(!user) {      
        users.push(body);
        return res.send(body);
    } 

    res.send('user already exists!');
}
function updateUsers(req, res) {
    const name = req.body.name;
    const email =req.params.email;

    const user = users.find((x) => x.email === email);

    if(!user) return res.send('user not found!');

    users.name = name;

    res.send('successfully updated');
}

module.exports.createUsers = createUsers;
module.exports.updateUsers = updateUsers;
module.exports.getUsers = getUsers;




