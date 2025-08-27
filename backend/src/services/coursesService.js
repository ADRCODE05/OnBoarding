import { 
    getCourse,
    getCourseById,
    postCourse,
    deleteCourse,
    getCourseByTitle,
    putCourse
} from "../models/coursesQueries.js";



export const serviceGetAllCourses = async () => {
    const data = await getCourse()
    return data
};



export const serviceGetCourseId = async (id_course) => {
    
    if(!id_course) {
        throw new Error('Campo obligatorio')
    } else if(isNaN(id_course)) {
        throw new Error('El id del curso tiene que ser nu numero valido')
    }

    const data = await getCourseById(id)
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
    if(!title || !description || !duration || !state_id || !type_id) {
        throw new Error('Campos obligatorios')
    }

    const data = await postCourse(title, description, duration, state_id, type_id)

    if(!data) {
        throw new Error('Error no se pudo crear un nuevo usuario')
    }

    return data
};


export const servicePutCourse = async (title, description, duration, state_id, type_id, id_course) => {
    if(!title || !description || !duration || !state_id || !type_id || !id_course) {
        throw new Error('Campos obligatorios')
    }

    const data = await putCourse(title, description, duration, state_id, type_id, id_course);
    
    if(!data) {
        throw new Error('Error al actualizar curso')
    }
    
    return data
}


export const serviceDeleteCourse = async (id_course) => {
    if(!id_course) {
        throw new Error('Campo obligatorio');
    } else if(isNaN(id_course)) {
        throw new Error('El id del curso tiene que ser un numero valido')
    }

    const data = await deleteCourse(id_course) 
    
    if(!data) {
        throw new Error('Error al eliminar el curso')
    }

    return data
};

