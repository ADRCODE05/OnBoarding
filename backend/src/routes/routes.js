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
router.get('/users', authMiddleware, showGetAllUser)

router.get('/profile', authMiddleware, profile)

router.get('/me', authMiddleware,  me)

router.get('/users/id/:user_id', authMiddleware, showGetUserId)

router.get('/users/email/:email', authMiddleware, showGetUserEmail)

router.post('/users/create', authMiddleware, showCreateUser)

router.post('/users/create/admin', authMiddleware, authRol(2),  showCreateUserAdmin)

router.put('/users/update/id/:user_id', authMiddleware, showUpdateUser)

router.put('/users/update/email/:email', authMiddleware, showDeleteUserEmail)

router.delete('/users/delete/id/:user_id', authMiddleware, showDeleteUserId)

router.delete('/users/delete/email/:email', authMiddleware, showDeleteUserEmail)




// rutas de empleados
router.get('/employees', authMiddleware, viewsAllEmployee)

router.get('/reports', authMiddleware, employeeTable)

router.get('/employees/id/:employee_id', authMiddleware, viewsEmployeeById)

router.get('/employees/identification/:identification_number', authMiddleware, viewsEmployeeByIdentification)

router.post('/employees/new/employee', authMiddleware, viewsNewEmployee)

router.put('/employees/update/id/:employee_id', authMiddleware, viewsPutEmployeesById)

router.put('/employees/update/identification/:identification_number', authMiddleware, viewsPutEmployeesByIdentification)

router.delete('/employees/delete/id/:employee_id', authMiddleware, viewsDeleteEmployees)

router.delete('/employees/delete/identification/:identification_number', authMiddleware, viewsDeleteEmployeesByIdentification)





// rutas de curso
router.get('/courses', authMiddleware, controllerGetAllCourse)

router.get('/courses/id/:course_id', authMiddleware, controllerGetAllCourseById)

router.get('/courses/title/:title', authMiddleware, controllerGetAllCourseByTitle)

router.post('/courses/create', authMiddleware, controllerPostCourse)

router.put('/courses/update/:course_id', authMiddleware, controllerPutCourse)

router.delete('/courses/delete/id/:course_id', authMiddleware, controllerRemoveCourse);

router.delete('/courses/delete/title/:title', authMiddleware, courseTitleDELETE)



// ruta de curso personalizados
router.get('/courses/personalized', authMiddleware, coursePersonalizedAllGET)

router.get('/courses/personalized/id/:coursep_id', authMiddleware, coursePersonalizedByIdGET)

router.get('/courses/personalized/title/:title', authMiddleware, coursePersonalizedByTitleGET)

router.post('/courses/personalized/new', authMiddleware, coursePersonalizedNew)

router.put('/courses/personalized/update/:coursep_id', authMiddleware, coursePersonalizedUpdatePUT)

router.delete('/courses/personalized/delete/id/:coursep_id', authMiddleware, coursePersonalizedRemoveByIdDELETE)

router.delete('/courses/personalized/delete/title/:title', authMiddleware, coursePersonalizedRemoveByTitleDELETE)



// rutas de registro de curso 
router.get('/registration', authMiddleware, registrationAll)

router.get('/registration/id/:registration_id', authMiddleware, registrationById)

router.post('/registration/new', authMiddleware, registrationCreate)

router.delete('/registration/delete/:registration_id', authMiddleware, registrationdelete)








export default router;