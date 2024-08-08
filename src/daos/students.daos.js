import Students from "../models/students.js";

const studentDAO ={};
studentDAO.getAll=async()=>{
    return await Students.find(); 
};

export default studentDAO
