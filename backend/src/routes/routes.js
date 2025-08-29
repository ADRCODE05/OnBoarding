import { Router } from "express";

import { 
        authMiddleware, 
        authRol 
} from "../middleware/authMiddleware.js";



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
        viewsEmployeeById, 
        viewsEmployeeByIdentification,
        viewsNewEmployee, 
        viewsPutEmployeesById,
        viewsPutEmployeesByIdentification,
        viewsDeleteEmployees, 
        viewsDeleteEmployeesByIdentification 
} from "../controllers/employee.controller.js";



// Courses
import { 
        controllerGetAllCourse, 
        controllerGetAllCourseById, 
        controllerGetAllCourseByTitle, 
        controllerPostCourse, 
        controllerPutCourse, 
        controllerRemoveCourse, 
        courseTitleDELETE
} from "../controllers/course.controller.js";



import { 
        coursePersonalizedAllGET, 
        coursePersonalizedByIdGET,
        coursePersonalizedByTitleGET,
        coursePersonalizedNew,
        coursePersonalizedRemoveByIdDELETE,
        coursePersonalizedRemoveByTitleDELETE,
        coursePersonalizedUpdatePUT
} from "../controllers/pCourse.controller.js";



import { 
        registrationAll, 
        registrationById, 
        registrationCreate, 
        registrationdelete, 
        registrationUpdate, 
        registrationUpdateAll 
} from "../controllers/registration.controller.js";




// endpoint route
const router = Router()

export const httpCat = (statusCode) => `https://http.cat/${statusCode}`


router.post('/login', login)



// brings all users
router.get('/users', showGetAllUser)

router.get('/users/id/:user_id', showGetUserId)

router.get('/users/email/:email', showGetUserEmail)

router.post('/users/create', showCreateUser)

router.put('/users/update/id/:user_id', showUpdateUser)

router.put('/users/update/email/:email', showDeleteUserEmail)

router.delete('/users/delete/id/:user_id', showDeleteUserId)

router.delete('/users/delete/email/:email', showDeleteUserEmail)




// rutas de empleados
router.get('/employees', viewsAllEmployee)

router.get('/employees/id/:employee_id', viewsEmployeeById)

router.get('/employees/identification/:identification_number', viewsEmployeeByIdentification)

router.post('/employees/new/employee', viewsNewEmployee)

router.put('/employees/update/id/:employee_id', viewsPutEmployeesById)

router.put('/employees/update/identification/:identification_number', viewsPutEmployeesByIdentification)

router.delete('/employees/delete/id/:id', viewsDeleteEmployees)

router.delete('/employees/delete/identification/:identification_number', viewsDeleteEmployeesByIdentification)





// rutas de curso
router.get('/course', controllerGetAllCourse)

router.get('/course/id/:course_id', controllerGetAllCourseById)

router.get('/course/title/:title', controllerGetAllCourseByTitle)

router.post('/course/create', controllerPostCourse)

router.put('/course/update/:course_id', controllerPutCourse)

router.delete('/course/delete/id/:course_id', controllerRemoveCourse);

router.delete('/course/delete/title/:title', courseTitleDELETE)



// ruta de curso personalizados
router.get('/course/personalized', coursePersonalizedAllGET)

router.get('/course/personalized/id/:coursep_id', coursePersonalizedByIdGET)

router.get('/course/personalized/title/:title', coursePersonalizedByTitleGET)

router.post('/course/personalized/new', coursePersonalizedNew)

router.put('/course/personalized/update/:coursep_id', coursePersonalizedUpdatePUT)

router.delete('/course/personalized/delete/id/:coursep_id', coursePersonalizedRemoveByIdDELETE)



router.delete('/course/personalized/delete/title/:title', coursePersonalizedRemoveByTitleDELETE)



// rutas de registro de curso 
router.get('/registrantion/', registrationAll)

router.get('/registrantion/id/:registration_id', registrationById)

router.post('/registrantion/new', registrationCreate)

router.put('/registrantion/update/:regsitrantion_id', registrationUpdate)

router.put('/registrantion/update/all/:registration_id', registrationUpdateAll)

router.delete('/registrantion/delete/:registration_id', registrationdelete)





// rutas privadas
// rutas d admin
//router.get('/admin', authMiddleware, authRol(1),  )




router.use((req, res) => {
        console.error('Error not found 404');
        res.redirect(httpCat(404))
});




export default router;