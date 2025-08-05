const fs = require("fs");
const path = require("path");

const command = process.argv[2];
const title = process.argv[3];
const content = process.argv[4];

//console.log(__dirname);

const notesDir = path.join(__dirname, "NOTES");
if(!fs.existsSync(notesDir)){
    fs.mkdirSync(notesDir);
}

// Add new note
if(command === "add"){
    if(!title || !content){
        console.log("❌ Please provide a title & a content to add, for example:");
        console.log("   node notes.js add [title] [content]");
        process.exit(1);
    }

    const filepath = path.join(notesDir, `${title}.txt`);
    fs.writeFileSync(filepath, content, "utf-8");
    console.log(`✅ Note ${title} created succesfully`)
}



//Read the note
if(command === "read"){
    if(!title){
        console.log("❌ Please provide a title to read, for example:");
        console.log("   node notes.js read [title] ");
        process.exit(1);
    }

    const filepath = path.join(notesDir, `${title}.txt`);
    if(fs.existsSync(filepath)){
        const readNote = fs.readFileSync(filepath, "utf-8");
        console.log("Note:", readNote);
    }else{
        console.log("❌ No directory found ❌")
    }
}


// List all  notes
if(command === "list"){
    const filepath = path.join(notesDir);

    if(fs.existsSync(filepath)){
        const listNote = fs.readdirSync(filepath, "utf-8");
        listNote.forEach((note) => console.log(note));
    }else{
        console.log("❌ No Directory Found ❌")
    }
}



// Delete Note app
if(command === "delete"){
    if(!title){
        console.log("❌ Please provide a title to delete, for example:");
        console.log("   node notes.js delete [title] ");
        process.exit(1);
    }

    const filePath = path.join(notesDir, `${title}.txt`);

    if(fs.existsSync(filePath)){
        const deletedHistory = path.join(notesDir, "deletedHistory");
        if(!fs.existsSync(deletedHistory)){
            fs.mkdirSync(deletedHistory);
        }
 
        const oldContent = fs.readFileSync(filePath, "utf-8");
        console.log(`Content of ${title}.txt is : ${oldContent}`);
        const backupPath = path.join(deletedHistory, `${title}.txt`);
        fs.writeFileSync(backupPath, oldContent, "utf-8");
        console.log(`✅ Note ${title}.txt saved succesfully`)

        fs.unlinkSync(filePath);
        console.log(`✅ Note ${title}.txt deleted succesfully`);
    }else{
        console.log("❌ No Directory Found ❌");
    }
}



//Update the note
if(command === "update"){
    if(!title || !content){
        console.log("❌ Please provide a title to update, for example:");
        console.log("   node notes.js update [title] ");
        process.exit(1);
    }

    const filePath = path.join(notesDir, `${title}.txt`);

    if(fs.existsSync(filePath)){
        const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

        const updatedHistory = path.join(notesDir, "updatedHistory");
        if(!fs.existsSync(updatedHistory)){
            fs.mkdirSync(updatedHistory);
        }

        const oldContent = fs.readFileSync(filePath, "utf-8");
        console.log(`Content of ${title}.txt is : ${oldContent}`);

        const backupPath = path.join(updatedHistory, `${title}_${timestamp}.txt`);
        fs.writeFileSync(backupPath, oldContent, "utf-8");
        console.log(`✅ Note ${title}_${timestamp}.txt saved succesfully`);


        fs.writeFileSync(filePath, content, "utf-8");
        console.log(`✅ Note ${title}_${timestamp}.txt updated succesfully`);
    }else{
        console.log("❌ No Directory Found ❌");
    }
}

