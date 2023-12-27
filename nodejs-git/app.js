// var express = require('express')

// app = express()

// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({
// }));
// app.use(bodyParser.json());


// var userRoutes = require('./controller/Usercontroller')
// var userRoutess = require('./controller/Studentcontroller');



// app.use('/api/user',userRoutes);
// app.use('/api/student',userRoutess);


// app.listen(1000);

var express = require ('express')

var cors = require('cors')


app = express()


 
var admin = require('./controller/Admincontroller')

var student = require('./controller/Studentcontroller')

var user = require ('./controller/Usercontroller')

app.use('/api/user',user)
app.use('/api/student',student)
app.use('/api/admin',admin)

.listen(4000);