import { Router } from "express";

import { authMiddleware, authRol } from "../middleware/authMiddleware.js";

import { 
    showGetAllUser,
    showGetUserId,
    showGetUserEmail,
    showCreateUser,
    showUpdateUser,
    showDeleteUserId,
    showDeleteUserEmail
} from "../controllers/user.controller.js";

import { 
        viewsAllEmployee, 
        viewsDeleteEmployees, 
        viewsEmployeeById, 
        viewsNewEmployee 
} from "../controllers/employee.controller.js";


// endpoint route
const router = Router()


// brings all users
router.get('/users', showGetAllUser)


router.get('/users/:user_id', showGetUserId)


router.get('/users/email/:email', showGetUserEmail)


router.post('/users/create', showCreateUser)


router.put('/users/update/:user_id', showUpdateUser)


router.delete('/users/delete/:user_id', showDeleteUserId)


router.delete('/users/delete/email/:email', showDeleteUserEmail)



// rutas de empleados
router.get('/employees', viewsAllEmployee)

router.get('/employees/:id', viewsEmployeeById)

router.post('/employees/new/employees', viewsNewEmployee)

router.delete('/employees/remove/employees', viewsDeleteEmployees)




// rutas privadas
// rutas d admin
//router.get('/admin', authMiddleware, authRol(1),  )




export default router;
