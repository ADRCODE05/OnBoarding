import { Router } from "express";
import { 
    showGetAllUser,
    showGetUserId,
    showGetUserEmail,
    showCreateUser,
    showUpdateUser,
    showDeleteUserId,
    showDeleteUserEmail
} from "../controllers/user.controller.js";

// endpoint route
const router = Router()


// brings all users
router.get('/users', showGetAllUser)



router.get('/users/:id_user', showGetUserId)



router.get('/users/email/:email', showGetUserEmail)



router.post('/users/create', showCreateUser)



router.put('/users/update:id_user', showUpdateUser)



router.delete('/users/delete/:id_user', showDeleteUserId)



router.delete('/users/delete/email/:email', showDeleteUserEmail)


export default router;
