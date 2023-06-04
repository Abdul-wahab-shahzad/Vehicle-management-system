const express=require("express")

const router=express.Router()
const {updateUser,deleteUser,getUser,getUsers, getUserem,createuser}=require("../controller/user")
router.post('/',createuser)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)
router.get('/find/:id',getUser)
router.get('/findemail/:email',getUserem)
router.get('/',getUsers)


module.exports=router