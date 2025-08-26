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


import { controllerGetAllCourse, controllerGetAllCourseById, controllerGetAllCourseByTitle, controllerPostCourse, controllerPutCourse, controllerRemoveCourse } from "../controllers/course.controller.js";


// endpoint route
const router = Router()

export const httpCat = (statusCode) => `https://http.cat/${statusCode}`


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




// rutas de curso
router.get('/course', controllerGetAllCourse)

router.get('/course/:id_course', controllerGetAllCourseById)

router.get('/course/:title', controllerGetAllCourseByTitle)

router.post('/course/create', controllerPostCourse)

router.put('/course/update', controllerPutCourse)

router.delete('/course/delete/:id_course', controllerRemoveCourse)




// rutas privadas
// rutas d admin
//router.get('/admin', authMiddleware, authRol(1),  )







router.use((req, res) => {
    console.log('Error not found 404');
    res.redirect(httpCat(404))
});




export default router;