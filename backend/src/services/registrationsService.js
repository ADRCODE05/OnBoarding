import { 
        getAllRegister,
        getRegisterById,
        postRegister,
        putRegister,
        putRegisterById,
        deleteRegister
} from "../models/registrationsQueries";



export const allRegister = async () => {
    const data = await getAllRegister()
    return data
};



export const registerById = async (registration_id) => {
    if(!registration_id) {
        throw new Error('El campo es obligatorio');
    }
    const data = await getRegisterById(registration_id)

    if(!data) {
        throw new Error('No existe ese registro')
    }

    return data
};


export const newRegister = async (employee_id, star_date, end_date, coursep_id, course_id) => {
    if(!employee_id || !star_date || !end_date || !coursep_id || !course_id) {
        throw new Error('Los campos son obligatorios')
    }

    const data = await postRegister(employee_id, star_date, end_date, coursep_id, course_id)

    if(!data) {
        throw new Error('No se puedo crear el nuevo registro')
    }

    return data
};


export const editAllRegister = async (star_date, end_date, registration_id) => {
    if(!star_date, end_date, registration_id) {
        throw new Error('Los campos son obligatorios')
    }

    const data = await putRegister(star_date, end_date, registration_id)

    if(!data) {
        throw new Error('No se pudo actualizar el registro')
    }

    return data
};


export const editRegisterById = async (employee_id, star_date, end_date, coursep_id, course_id, registration_id) => {
    if(!employee_id || !star_date || !end_date || !coursep_id || !course_id || !registration_id) {
        throw new Error('Los campos son obligatorios')
    }

    const data = await putRegisterById(employee_id, star_date, end_date, coursep_id, course_id, registration_id) 

    if(!data) {
        throw new Error('no existe el registro')
    }

    return data
};



export const eliminateRegister = async (registration_id) => {
    if(!registration_id) {
        throw new Error('Campo obligatorio')
    }

    const data = await deleteRegister(registration_id)

    if(!data) {
        throw new Error('No se pudo borrar el registro')
    }

    return data
;}
