import { 
    getCourse,
    getCourseById,
    postCourse,
    deleteCourse,
    getCourseByTitle,
    putCourse,
    deleteCourseByTitle
} from "../models/coursesQueries.js";



export const serviceGetAllCourses = async () => {
    const data = await getCourse()
    return data
};



export const serviceGetCourseId = async (course_id) => {
    course_id = Number(course_id)
    
    if(!course_id) {
        throw new Error('Campo obligatorio')
    }
    
    if(isNaN(course_id)) {
        throw new Error('El id del curso tiene que ser nu numero valido')
    }

    const data = await getCourseById(course_id)
    if(!data) {
        throw new Error('Error no existe el curso, por favor intentar mas tarde.....')
    }

    return data
};



export const serviceGetCourseTitle = async (title) => {
    if(!title) {
        throw new Error('Campo obligatorio')
    }

    const data = await getCourseByTitle(title)

    if(!data) {
        throw new Error('El curso no existe')
    }
}



export const servicePostCourse = async (title, description, duration, state_id, type_id) => {
    const now = new Date()
    duration = now.toTimeString().split(' ')[0];
    state_id = Number(state_id)
    type_id = Number(type_id)

    if(!title || !description || !duration || !state_id || !type_id) {
        throw new Error('Campos obligatorios')
    }

    if(isNaN(state_id) || isNaN(type_id)) {
        throw new Error('El id del tiene que ser un numero valido')
    }

    const data = await postCourse(title, description, duration, state_id, type_id)

    if(!data) {
        throw new Error('Error no se pudo crear un nuevo curso')
    }

    return data
};


export const servicePutCourse = async (title, description, duration, state_id, type_id, course_id) => {
    duration = new Date();
    state_id = Number(state_id);
    type_id = Number(type_id);


    if(!title || !description || !duration || !state_id || !type_id || !course_id) {
        throw new Error('Campos obligatorios')
    }

    if(isNaN(state_id) || isNaN(type_id)) {
        throw new Error('El id tiene que ser nu numero valido')
    }
    const data = await putCourse(title, description, duration, state_id, type_id, course_id);
    
    if(!data) {
        throw new Error('Error al actualizar curso')
    }
    
    return data
}


export const serviceDeleteCourse = async (course_id) => {
    course_id = Number(course_id);


    if(!course_id) {
        throw new Error('Campo obligatorio');
    }
    
    
    if(isNaN(course_id)) {
        throw new Error('El id tiene que ser un numero valido')
    }

    const data = await deleteCourse(course_id) 
    
    if(!data) {
        throw new Error('Error al eliminar el curso')
    }

    return data
};


export const serviceDeleteCourseByTitle = async (title) => {
    if(!title) {
        throw new Error('Campo obligatorio');
    }

    const data = await deleteCourseByTitle(title) 
    
    if(!data) {
        throw new Error('Error al eliminar el curso')
    }

    return data
};


