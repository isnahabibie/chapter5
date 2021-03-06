const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const datauser = require ("../chapter5-master/datauser/datauser.json");

app.use(bodyParser.json());

app.set("view engine", "html");
app.engine("html", require("ejs"). renderFile);

app.use(express.static(__dirname + "/views/tugas-chapter3-main"));
app.use(express.static(__dirname + "/views/game-suit-isna-master"));

// engine for chapter 3
app.get("/chapter3", (req, res) =>{
    return res.render("tugas-chapter3-main/index");
})

// engine for chapter 3
app.get("/chapter4", (req, res) =>{
    return res.render("game-suit-isna-master/index");
})

// API login
app.post("/login", (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;
    const User = datauser.find(
        (index) => index.username == username && index.password == password
      );
    
      if (User) {
        res.status(200);
        res.json({ message: "selamat datang "+username });
      } 
      else {
        res.status(400);
        res.json({message:"Login gagal"});
      };
})



// app.set("view engine", "html");
// app.engine("html", require("ejs"). renderFile);

// app.get("/game", (req, res) =>{
//     return res.render("index");
// })

// // userlist default 1 ea Id
// let userList = [
//     {
//         name: "isna",
//         password: "coba1",
//         Id: 1
//     },
// ];

// let counter = 2;

// app.use(bodyParser.json());


// //HOME
// app.get('/', (req, res) => {

//     res.send('Rumah tercinta')

// });


// // mendapatkan list dari user
// app.get('/users', (req, res) => {
//     return res.json(userList);
// });

// //menambahkan user baru, pada body isikan name dan password sehingga user bertambah
// app.post("/users", (req, res) => {
//     const userName = req.body["name"];
//     const password =  req.body["password"];
//     const Id = counter;
//     userList.push({"name" : userName, "password": password, "Id": Id});
//     counter++;
//     res.json(userList);
//     });


// //melakukan filter user berdasarkan Id , pada params isikan value nomor Id nya sehingga filter dapat dilakukan
// app.get('/users/:Id', (req, res) => {
//     const {Id} = req.params

//     res.json( 
//         userList.filter(user => {
//             return user.Id == Id
//         })
//     )
// })

// //mengedit nama dan password by Id, filter terlebih dahulu Id yang ingin di edit di params dengan memasukan value Id nya. lalu edit nama dan password di body
// app.put('/users/:Id', (req, res) => {
//     const {Id} = req.params;

//     const selectedUser = userList.find(user => user.Id == Id);
//     selectedUser.name = req.body["name"];
//     selectedUser.password = req.body["password"];

//     res.json(selectedUser);
// })

// //menghapus user, filter terlebih dahulu Id yang ingin di hapus di params dengan memasukan value Id nya
// app.delete("/users/:Id", (req, res) => {
//     console.log(req.params);
//     const selectedUser = userList.find((user) => user.Id == req.params.Id);
//     const deleteUser = userList.findIndex((user) => user.Id === selectedUser.Id);
//     userList.splice(deleteUser,1);
//     return res.send(userList);
// });


//Port
app.listen(port, () => console.log('Server is running on port : ' + port));