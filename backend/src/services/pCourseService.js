import { 
        getPersonalized,
        getPersonalizedById,
        getPersonalizedByTitle,
        postPersonalized,
        putPersonalizedById,
        deletePersonalizedById,
        deletePersonalizedByTitle
} from "../models/pCoursesQueries.js";



export const personalizedGET = async () => {
    const data = await getPersonalized()
    return data
};



export const personalizedByIdGET = async (coursep_id) => {
    if(!coursep_id) {
        throw new Error('El campo es obligatorio')
    }

    const data = await getPersonalizedById(coursep_id)

    if(!data) {
        throw new Error('curso personalizado no existe')
    }

    return data
};


export const personalizedBytitleGET = async (title) => {
    if(!title) {
        throw new Error('El campo es obligatorio');
    }

    const data = await getPersonalizedByTitle(title);

    if(!data) {
        throw new Error('UPS error parece ser que el curso no existe')
    }

    return data
};


export const personalizedNewCoursePOST = async (coursep_id, title, description, duration, company_id, state_id, type_id) => {
    company_id = Number(company_id);
    state_id = Number(state_id);
    type_id = Number(type_id)
    
    if(!coursep_id || !title || !description || !duration || !company_id || !state_id || !type_id) {
        throw new Error('Los campos para crear un curso son obligatorios')
    }

    if(isNaN(company_id) && isNaN(state_id) && isNaN(type_id)) {
        throw new Error('Los campos que tenga Id tienen que tener un numero valido');
    }

    const data = await postPersonalized(title, description, duration, company_id, state_id, type_id);

    if(!data) {
        throw new Error('Error al crear curso personalizado')
    }

    return data
};


export const personalizedUpdatePUT = async (title, description, duration, company_id, state_id, type_id, coursep_id) => {
    company_id = Number(company_id);
    state_id = Number(state_id);
    type_id = Number(type_id);


    if(!title || !description || !duration || !company_id || !state_id || !type_id || !coursep_id) {
        throw new Error('Los campos para crear un curso son obligatorios')
    }

    if(isNaN(company_id) && isNaN(state_id) && isNaN(type_id)) {
        throw new Error('Los campos que tenga Id tienen que tener un numero valido');
    }

    const data = await putPersonalizedById(title, description, duration, company_id, state_id, type_id, coursep_id)

    if(!data) {
        throw new Error('Curso personalizado no existe por favor intente de nuevo')
    }

    return data
};


export const personalizedRemoveByIdDELETE = async (coursep_id) => {
    if(!coursep_id) {
        throw new Error('El campo es obligatorio')
    }
    const data = await deletePersonalizedById(coursep_id)

    if(!data) {
        throw new Error('UPS, parece que no existe un curso con ese ID')
    }

    return data
};


export const personalizedRemoveByTitleDELETE = async (title) => {
    if(!title) {
        throw new Error('El campo es obligatorio')
    }

    const data = await deletePersonalizedByTitle(title);

    if(!data) {
        throw new Error('UPS, parece que no existe un curso con ese titulo')
    }

    return data


}




