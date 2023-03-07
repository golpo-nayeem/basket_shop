module.exports.start = () =>{
    const app = require('./express')();

    app.listen(app.get('port'), () => {
        console.log('Server listining on port 3000')
    })
}