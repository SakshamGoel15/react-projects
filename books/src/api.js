import axios from "axios";
const url = "http://localhost:3001/books";
const createBook = async (title) => {
    const response = await axios.post(url, {"title":title});
    return response.data;
};
const updateBook = async (id,title) => {
    const response = await axios.put(`${url}/${id}`, {"title":title});
    return response.data;
};

const deleteBook =  async(id) => {
    const response =  await axios.delete(`${url}/${id}`);
    return response.data;
};

const getBooks = async () =>{
    const response = await axios.get(url);
    return response.data;
};


export { createBook, updateBook, deleteBook, getBooks };

