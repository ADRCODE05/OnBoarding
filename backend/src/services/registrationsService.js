import { 
        getAllRegister,
        getRegisterById,
        postRegister,
        deleteRegister
} from "../models/registrationsQueries.js";



export const allRegister = async () => {
    const data = await getAllRegister()
    return data
};



export const registerById = async (registration_id) => {
    registration_id = Number(registration_id);

    if(!registration_id) {
        throw new Error('El campo es obligatorio');
    }
    const data = await getRegisterById(registration_id)

    if(!data) {
        throw new Error('No existe ese registro')
    }

    return data
};


export const newRegister = async (employee_id, coursep_id, course_id) => {
    employee_id = Number(employee_id);
    course_id = Number(course_id);

    if(!employee_id || !coursep_id || !course_id) {
        throw new Error('Los campos son obligatorios')
    }

    if(isNaN(employee_id) && isNaN(course_id)) {
        throw new Error('Los id deben ser tipo de dato permitido')
    }

    const data = await postRegister(employee_id, coursep_id, course_id)

    if(!data) {
        throw new Error('No se puedo crear el nuevo registro')
    }

    return data
};


export const eliminateRegister = async (registration_id) => {
    registration_id = Number(registration_id)


    if(!registration_id) {
        throw new Error('Campo obligatorio')
    }

    if(isNaN(registration_id)) {
        throw new Error('El id debe ser numero permitido')
    }

    const data = await deleteRegister(registration_id)

    if(!data) {
        throw new Error('No se pudo borrar el registro')
    }

    return data
;}
