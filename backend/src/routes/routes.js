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

const router = Router()

router.get('/users', showGetAllUser)

router.get('/users/:id_user', showGetUserId)

router.get('/users/email/:email', showGetUserEmail)

router.post('/users/create', showCreateUser)

router.put('/users/update', showUpdateUser)

router.delete('/users/delete/:id_user', showDeleteUserId)

router.delete('/users/delete/email/:email', showDeleteUserEmail)


export default router;