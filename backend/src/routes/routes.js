import { Router } from "express";

import { authMiddleware, authRol } from "../middleware/authMiddleware.js";

// Users
import { 
        showGetAllUser,
        showGetUserId,
        showGetUserEmail,
        showCreateUser,
        showUpdateUser,
        showDeleteUserId,
        showDeleteUserEmail,
        login
} from "../controllers/user.controller.js";

// Employees
import { 
        viewsAllEmployee, 
        viewsDeleteEmployees, 
        viewsDeleteEmployeesByIdentification, 
        viewsEmployeeById, 
        viewsNewEmployee, 
        viewsPutEmployeesById,
        viewsPutEmployeesByIdentification
} from "../controllers/employee.controller.js";


// Courses
import { 
        controllerGetAllCourse, 
        controllerGetAllCourseById, 
        controllerGetAllCourseByTitle, 
        controllerPostCourse, 
        controllerPutCourse, 
        controllerRemoveCourse, 
        courseTitleDELETE} from "../controllers/course.controller.js";


import { 
        coursePersonalizedAllGET, 
        coursePersonalizedByIdGET,
        coursePersonalizedByTitleGET,
        coursePersonalizedNew,
        coursePersonalizedRemoveByIdDELETE,
        coursePersonalizedRemoveByTitleDELETE,
        coursePersonalizedUpdatePUT
} from "../controllers/pCourse.controller.js";



// endpoint route
const router = Router()

export const httpCat = (statusCode) => `https://http.cat/${statusCode}`


router.post('/login', login)



// brings all users
router.get('/users', showGetAllUser)

router.get('/users/:user_id', showGetUserId)

router.get('/users/email/:email', showGetUserEmail)

router.post('/users/create', showCreateUser)

router.put('/users/update/:user_id', showUpdateUser)


// agregar a swagger
router.put('/user/update/:email', showDeleteUserEmail)

router.delete('/users/delete/:user_id', showDeleteUserId)

router.delete('/users/delete/email/:email', showDeleteUserEmail)




// rutas de empleados
router.get('/employees', viewsAllEmployee)

router.get('/employees/:id', viewsEmployeeById)

router.get('/employees/:identification_number', viewsDeleteEmployeesByIdentification)

router.post('/employees/new/employee', viewsNewEmployee)

router.put('/employees/update/:id', viewsPutEmployeesById)

router.put('/employees/update/:identification_number', viewsPutEmployeesByIdentification)

router.delete('/employees/remove/employee/:id', viewsDeleteEmployees)

router.delete('/employees/remove/employee/:identification_number', viewsDeleteEmployeesByIdentification)





// rutas de curso
router.get('/course', controllerGetAllCourse)

router.get('/course/:course_id', controllerGetAllCourseById)

router.get('/course/:title', controllerGetAllCourseByTitle)

router.post('/course/create', controllerPostCourse)

router.put('/course/update/:course_id', controllerPutCourse)

router.delete('/course/delete/:course_id', controllerRemoveCourse);

router.delete('/course/delete/:title', courseTitleDELETE)



// ruta de curso personalizados
router.get('/course/personalized', coursePersonalizedAllGET)

router.get('/course/personalized/:coursep_id', coursePersonalizedByIdGET)

router.get('/course/personalized/email', coursePersonalizedByTitleGET)

router.post('/course/personalized/new', coursePersonalizedNew)

router.put('/course/personalized/update/:coursep_id', coursePersonalizedUpdatePUT)

router.delete('/course/personalized/delete/:coursep_id', coursePersonalizedRemoveByIdDELETE)

router.delete('/course/personalized/delete', coursePersonalizedRemoveByTitleDELETE)



// rutas de registro de curso 




// rutas privadas
// rutas d admin
//router.get('/admin', authMiddleware, authRol(1),  )




router.use((req, res) => {
        console.error('Error not found 404');
        res.redirect(httpCat(404))
});




export default router;