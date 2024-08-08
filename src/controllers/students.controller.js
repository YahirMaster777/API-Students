import studentDAO from "../daos/students.daos.js";

export const getAll= async (req,res)=>{
    studentDAO.getAll()
    .then(students=>{
        res.json(students) 
    })
    .catch(err=>{
        res.json({message:err})
    })
};