import student from "../models/students";

const studentDAO ={};
studentDAO.getAll=async()=>{
    return await student.find(); 
};

export default studentDAO
