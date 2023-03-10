const { object,string } = require('yup');

const users =[];

function getUsers(req, res) {
    res.send(users);
}
function createUsers(req, res) {
    const body = req.body;
    const name = body.name;
    const email = body.email;

    const regesterSchema = object().shape({
        email: string()
            .email('This field should be a valid email address')
            .required('This field must not be empty'),
        
        name: string()
            .min(2,'This field must be at least 2 characters long')
            .max(30,'This field must be at most 30 characters long')
            .required('this field mist not be empty')
    })

    const promise = regesterSchema.validate({ email, name }, {abortEarly:false});
    
        promise.then(function () {
            const user = users.find((x) => x.email === email);

            if(!user) {      
                users.push(body);
                return res.status(201).send(body);
            } 
        
            res.send('user already exists!');
        })
        .catch(function (err) {
            const errMessage = {path: err.inner[0].path, msg: err.inner[0].message};

            res.status(400).send(errMessage);
        })


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




