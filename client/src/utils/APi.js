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
        console.log(`id:${id}`);
        return axios.get("/api/books/" + id);
    },
    // Save a book to database
    saveBook: function(savedBooks){
        console.log(savedBooks)
        // if (savedBooks.description = undefined){
        //     savedBooks.description = " ";
        //     console.log(savedBooks)
        //     return axios.post("/api/books/", savedBooks);
        // }else{
            return axios.post("/api/books/", savedBooks);
        // }
        
        
    },
    // Delete a book by id
    deleteBook: function(id){
        console.log(`id:${id}`);
        return axios.delete("/api/books/" + id);
    }

}