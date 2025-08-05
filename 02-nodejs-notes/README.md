# 📝 Node.js CLI Notes App

A simple and powerful **command-line Notes App** built with **Node.js core modules** like `fs` and `path`. This app lets you create, read, update, delete, and list notes — with automatic backups of deleted and updated notes.

## 🚀 Features

- 📄 Create and save notes (`.txt` files)
- 🔍 Read any specific note by title
- 📃 List all saved notes
- 🗑️ Delete a note with backup to `deletedHistory/`
- ✏️ Update a note with timestamped backup in `updatedHistory/`
- 📁 All notes are stored in a local `NOTES/` folder

---

## 📦 Tech Stack

- Node.js
- Core Modules: `fs`, `path`, `process`

---


---

## 🛠️ How to Use

```bash

# Add a Note
node notes.js add "NoteTitle" "Your note content here"

# Read a Note
node notes.js read "NoteTitle"

# List All Notes
node notes.js list

# Delete a Note (Backed up to deletedHistory/)
node notes.js delete "NoteTitle"

# Update a Note (Old version backed up to updatedHistory/)
node notes.js update "NoteTitle" "Updated content here"

# 🧠 Example
node notes.js add "shopping" "Buy milk and eggs"
node notes.js read "shopping"
node notes.js update "shopping" "Buy milk, eggs, and bread"
node notes.js delete "shopping"

# ✅ Output Preview
 Note shopping created successfully
 => Note: Buy milk and eggs
 Note shopping_2025-08-05T11-23-40-000Z.txt saved successfully
 Note shopping_2025-08-05T11-23-40-000Z.txt updated successfully
 Note shopping.txt deleted successfully
