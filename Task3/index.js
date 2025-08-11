const express = require("express");
const methodOverride = require("method-override");
const path = require("path");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Some Random book data
let books = [
        { id: 101, title: "The Shadow’s Edge", author: "Elena Cross" },
        { id: 102, title: "Whispers of the Storm", author: "Marcus Flint" },
        { id: 103, title: "Crimson Horizon", author: "Lydia Monroe" },
        { id: 104, title: "Echoes in the Mist", author: "Daniel Whitmore" },
        { id: 105, title: "Shattered Realms", author: "Clara Hastings" },
        { id: 106, title: "The Forgotten Voyage", author: "Harvey Sinclair" },
        { id: 107, title: "Silent Flames", author: "Nora Valdez" },
        { id: 108, title: "Threads of Time", author: "Samuel Grant" }
];

// Route: Show all books
app.get("/books", (req, res) => {
    res.render("allBooks", { books });
});

// Route: Edit form
app.get("/books/:id/edit", (req, res) => {
    const { id } = req.params;
    const book = books.find(b => b.id == id);
    res.render("editBook", { book });
});

// Route: Update book
app.put("/books/:id", (req, res) => {
    const { id } = req.params;
    const { title, author } = req.body;
    const book = books.find(b => b.id == id);
    if (book) {
        book.title = title;
        book.author = author;
    }
    res.redirect("/books");
});

// Route: Delete book
app.delete("/books/:id", (req, res) => {
    const { id } = req.params;
    books = books.filter(b => b.id != id);
    res.redirect("/books");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
