import axios from "axios";

export default{
    // Get books from google
    getGoogleSearchBooks: function(query){
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
    },
    // Get all books from api.
    getBooks: function(){
        return axios.get("/api/books");
    },
    // Get book by id.
    getBook: function(id){
        return axios.get("/api/books/" + id);
    },
    // Save a book to database
    saveBook: function(savedBooks){
        return axios.post("/api/books", savedBooks);
    },
    // Delete a book by id
    deleteBook: function(id){
        return axios.delete("/api/books/" + id);
    }

}