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
        login,
        showCreateUserAdmin,
        me,
        profile
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


// Course personalized
import { 
        coursePersonalizedAllGET, 
        coursePersonalizedByIdGET,
        coursePersonalizedByTitleGET,
        coursePersonalizedNew,
        coursePersonalizedRemoveByIdDELETE,
        coursePersonalizedRemoveByTitleDELETE,
        coursePersonalizedUpdatePUT
} from "../controllers/pCourse.controller.js";


// Registration 
import { 
        employeeTable,
        registrationAll, 
        registrationById, 
        registrationCreate, 
        registrationdelete
} from "../controllers/registration.controller.js";




// endpoint route
const router = Router()

router.post('/login', login)



// brings all users
router.get('/users', showGetAllUser)

router.get('/profile', authMiddleware, profile)

router.get('/me', authMiddleware,  me)

router.get('/users/id/:user_id', showGetUserId)

router.get('/users/email/:email', showGetUserEmail)

router.post('/users/create', showCreateUser)

router.post('/users/create/admin', showCreateUserAdmin)

router.put('/users/update/id/:user_id', showUpdateUser)

router.put('/users/update/email/:email', showDeleteUserEmail)

router.delete('/users/delete/id/:user_id', showDeleteUserId)

router.delete('/users/delete/email/:email', showDeleteUserEmail)




// rutas de empleados
router.get('/employees', viewsAllEmployee)

router.get('/reports', authMiddleware, employeeTable)

router.get('/employees/id/:employee_id', viewsEmployeeById)

router.get('/employees/identification/:identification_number', viewsEmployeeByIdentification)

router.post('/employees/new/employee', viewsNewEmployee)

router.put('/employees/update/id/:employee_id', viewsPutEmployeesById)

router.put('/employees/update/identification/:identification_number', viewsPutEmployeesByIdentification)

router.delete('/employees/delete/id/:employee_id', viewsDeleteEmployees)

router.delete('/employees/delete/identification/:identification_number', viewsDeleteEmployeesByIdentification)





// rutas de curso
router.get('/courses', controllerGetAllCourse)

router.get('/courses/id/:course_id', controllerGetAllCourseById)

router.get('/courses/title/:title', controllerGetAllCourseByTitle)

router.post('/courses/create', controllerPostCourse)

router.put('/courses/update/:course_id', controllerPutCourse)

router.delete('/courses/delete/id/:course_id', controllerRemoveCourse);

router.delete('/courses/delete/title/:title', courseTitleDELETE)



// ruta de curso personalizados
router.get('/courses/personalized', coursePersonalizedAllGET)

router.get('/courses/personalized/id/:coursep_id', coursePersonalizedByIdGET)

router.get('/courses/personalized/title/:title', coursePersonalizedByTitleGET)

router.post('/courses/personalized/new', coursePersonalizedNew)

router.put('/courses/personalized/update/:coursep_id', coursePersonalizedUpdatePUT)

router.delete('/courses/personalized/delete/id/:coursep_id', coursePersonalizedRemoveByIdDELETE)

router.delete('/courses/personalized/delete/title/:title', coursePersonalizedRemoveByTitleDELETE)



// rutas de registro de curso 
router.get('/registration', registrationAll)

router.get('/registration/id/:registration_id', registrationById)

router.post('/registration/new', registrationCreate)

router.delete('/registration/delete/:registration_id', registrationdelete)








export default router;