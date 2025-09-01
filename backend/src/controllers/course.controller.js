import { 
    serviceGetAllCourses,
    serviceGetCourseId,
    servicePostCourse,
    serviceDeleteCourse,
    serviceGetCourseTitle,
    servicePutCourse,
    serviceDeleteCourseByTitle
} from "../services/coursesService.js";

export const controllerGetAllCourse = async (req, res) => {
    try {
        const data = await serviceGetAllCourses()
        res.status(200).json(data)
    } catch (error) {
        console.error('Error: ', error.message);
        res.status(404).json({
            message: 'Error al obtener todos los usuarios',
            error: error.message
        })
    }
};


export const controllerGetAllCourseById = async (req, res) => {
    try {
        const { course_id } = req.params
        const data = await serviceGetCourseId(course_id)
        res.status(200).json(data)
    } catch (error) {
        console.error('Error: ', error.message)
        res.status(404).json({
            message: 'Error al obtener curso por ID',
            error: error.message
        })
    }
};


export const controllerGetAllCourseByTitle = async (req, res) => {
    try {
        const { title } = req.params
        const data = await serviceGetCourseTitle(title)
        res.status(200).json(data)
    } catch (error) {
        console.error('Error', error.message);
        res.status(404).json({
            message: 'Error al obtener curso por titulo',
            error: error.message
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
        const data = await servicePostCourse(title, description, duration, state_id, type_id)
        res.status(201).json(data)
    } catch (error) {
        console.error('Error: ', error.message);
        res.status(404).json({
            message: 'Error al crear usuario',
            error: error.message
        })
    }
};


export const controllerPutCourse = async (req, res) => {
    try {
        const { course_id } = req.params
        const {
            title,
            description,
            duration,
            state_id,
            type_id
        } = req.body
        const data = await servicePutCourse(title, description, duration, state_id, type_id, course_id)
        res.status(202).json(data)
    } catch (error) {
        console.error('Error: ', error.message);
        res.status(400).json({
            message: 'Error al actualizar curso',
            error: error.message
        })
    }
};


export const controllerRemoveCourse = async (req, res) => {
    try {
        const { course_id } = req.params
        const data = await serviceDeleteCourse(course_id)
        req.status(200).json(data)
    } catch (error) {
        console.error('Error: ', error.message);
        res.status(404).json({
            message: 'Error no se pudo eliminar el curso',
            error: error.message
        })
        
    }
};


export const courseTitleDELETE = async (req, res) => {
    try {
        const { title } = req.params
        const data = await serviceDeleteCourseByTitle(title)
        res.status(200).json(data)
    } catch (error) {
        console.error('no se pudo eliminar el curso');
        res.status(404).json({
            message: 'Error no se pudo eliminar el curso, no existe el titulo',
            error: error.message
        })
        
    }
}