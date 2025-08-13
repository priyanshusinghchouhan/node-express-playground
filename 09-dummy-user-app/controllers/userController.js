
let users = [
  { id: 1, name: "Flick", email: "Flick0@example.com" },
  { id: 2, name: "Pedri", email: "pedri@example.com" },
  { id: 3, name: "Lewandowski", email: "lewa9@gmail.com"},
  { id: 4, name: "Cubarsi", email: "cubarsi2@gmail.com"},
  { id: 5, name: "Raphina", email: "raphina11@gmail.com"}
];


//creating users
const createUser = (req, res) => {
    const {name, email} = req.body;

    if(!name || !email){
        return res.status(400).json("Name and Email are required");
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    }

    users.push(newUser);

    res.json({
        message: "User Created successfully",
        data : newUser
    })
};


//listing all users
const getAllUsers = (req, res) =>{
    res.json({
        message: "All users",
        data: users
    })
};


//findind users based on their id
const getUserById = (req, res) =>{
    const id = Number(req.params.userid);

    const matchedUser = users.find((user) => user.id === id);

    if(!matchedUser){
        return res.status(404).json("No user exists with such id");
    }

    res.json({
        message: "User found",
        data: matchedUser
    })
};


//deleting users based on their id
const deleteUser =  (req, res) => {
    const id = Number(req.params.userid);

    const oldUser = users.find((user) => user.id === id);

    //using findIndex logic instead of filter
    const index = users.findIndex((user) => user.id === id);
    users.splice(index, 1); // removing only one element at "index"

    //users = users.filter((user) => user.id !== id);

    if(!oldUser){
        return res.status(404).json("No user exists with such id");
    }

    res.json({
        message: "User deleted",
        data : oldUser
    })
};


//updating whole users with new ones
const updateUser =(req, res) => {
    const id = Number(req.params.userid);
    const updatedUser = req.body;


    const index = users.findIndex((user) => user.id === id);

    if(index === -1){
        return res.status(404).json("No user with such id");
    }

    if(Object.keys(updatedUser).length === 0){
        return res.status(400).json({message: "Please provide user details"});
    }

    users[index] = {id, ...updatedUser}

    res.json({
        message: "User updated successfully",
        data: updatedUser
    })
};



//patch
const patchUser = (req, res) => {
    const id = Number(req.params.userid);
    const {name, email} = req.body;

    const index = users.findIndex((user) => user.id === id);

    if(index === -1){
        res.status(404).json("No user with such id");
    }

    const user = users[index];

    if(!name && !email){ // if req.body is empty
        return res.status(400).json({ message: "No fields to update" })
    }

    if(name) user.name = name;
    if(email) user.email = email;

    users[index] = user; //reassigning the updated user with updated email and name


    res.json({
        message: "User update successfully",
        data: user
    })
};



module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    deleteUser,
    updateUser,
    patchUser
};
