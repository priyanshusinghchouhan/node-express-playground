const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
  { id: 1, name: "Priyanshu", email: "ps@example.com" },
  { id: 2, name: "Pedri", email: "pedri@example.com" },
];


//creating users
app.post("/users", (req, res) => {
    const {name, email} = req.body;

    if(!name || !email){
        return res.status(400).json({error: "Name and email are required."});
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    }

    users.push(newUser);

    res.status(200).json({message: "User Added", data: newUser});
});


//listing all users
app.get("/users", (req, res) =>{
    res.json({
        message: "All Users",
        data: users
    });
});


//finding users with id
app.get("/users/:userid", (req, res) => {
    const id = Number(req.params.userid);

    
    const matusers = users.find((user) => user.id == id);
    console.log(matusers);

    if(!matusers){
        return res.status(404).json("No user with such id")
    }
    res.json({
        message: "User Found",
        data: matusers
    });
})



//deleting users based on their id
app.delete("/users/:userid", (req, res) => {
    const id = Number(req.params.userid);

    const delusers = users.find((user) => user.id === id);

    if(!delusers){
        return res.status(404).json({ message: "No user with such ID" });
    }

    //filtering out users which matching id 
    users = users.filter((user) => user.id !== id);
    
    res.status(200).json({
        message: "User Deleted",
        data: delusers
    })
})


app.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`);
})