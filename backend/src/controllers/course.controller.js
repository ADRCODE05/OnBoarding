import { deleteCourse, getCourseByTitle, postCourse } from "../models/coursesQueries";
import { putEmployeesById } from "../models/employeeQueries";
import { 
    serviceGetAllCourses,
    serviceGetCourseId,
    servicePostCourse,
    serviceDeleteCourse
} from "../services/coursesService";

export const controllerGetAllCourse = async (req, res) => {
    try {
        const data = await serviceGetAllCourses()
        res.status(200).json(data)
    } catch (error) {
        console.log('Error: ', error.message);
        res.status(404).json({
            message: 'Error al obtener todos los usuarios',
            error: error.message
        })
    }
};


export const controllerGetAllCourseById = async (req, res) => {
    try {
        const { id_course } = req.params
        const data = await serviceGetCourseId(id_course)
        res.status(200).json(data)
    } catch (error) {
        console.log('Error: ', error.message)
        res.status(404).json({
            message: 'Error al obtener curso por ID'
        })
    }
};


export const controllerGetAllCourseByTitle = async (req, res) => {
    try {
        const { title } = req.params
        const data = await getCourseByTitle(title)
        res.status(200).json(data)
    } catch (error) {
        console.log('Error', error.message);
        res.status(404).json({
            message: 'Error al obtener curso por titulo'
        })
    }
};


export const controllerPostCourse = async (req, res) => {
    try {
        const { 
            title,
            description,
            duration,
            state_id,
            type_id
        }  = req.body
        const data = await postCourse(title, description, duration, state_id, type_id)
        res.status(201).json(data)
    } catch (error) {
        console.log('Error: ', error.message);
        res.status(404).json({
            message: 'Error al crear usuario'
        })
    }
};


export const controllerPutCourse = async (req, res) => {
    try {
        const { id_course } = req.params
        const {
            title,
            description,
            duration,
            state_id,
            type_id
        } = req.body
        const data = await putEmployeesById (id_course, title, description, duration, state_id, type_id)
        res.status(202).json(data)
    } catch (error) {
        console.log('Error: ', error.message);
        res.status(400).json({
            message: 'Error al actualizar curso'
        })
    }
};


export const controllerRemoveCourse = async (req, res) => {
    try {
        const { id_course } = req.params
        const data = await deleteCourse(id_course)
        req.status(200).json(data)
    } catch (error) {
        console.log('Error: ', error.message);
        res.status(404).json({
            message: 'Error no se pudo eliminar el curso',
            error: error.message
        })
        
    }
};