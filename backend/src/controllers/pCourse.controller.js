import { 
        personalizedGET,
        personalizedByIdGET,
        personalizedBytitleGET,
        personalizedNewCoursePOST,
        personalizedUpdatePUT,
        personalizedRemoveByIdDELETE,
        personalizedRemoveByTitleDELETE
} from "../services/pCourseService.js";


export const coursePersonalizedAllGET = async (req, res) => {
    try {
        const data = await personalizedGET()
        res.status(200).json(data)
    } catch (error) {
        console.error('Error obteniendo cursos personalizados', error.message);
        res.status(404).json({
            message: 'Error al obtener todos los cursos personalizados',
            error: error.message
        })
    }
};

export const coursePersonalizedByIdGET = async (req, res) => {
    try {
        const { id } = req.params
        const data = await personalizedByIdGET(id)
        res.status(200).json(data)
    } catch (error) {
        console.error('Error obteniendo curso personalizado por ID', error.message);
        res.status(404).json({
            message: 'Error al obtener curso personalizado por Id',
            error: error.message
        })
    }
};


export const coursePersonalizedByTitleGET = async (req, res) => {
    try {
        const { title } = req.body
        const data = await personalizedBytitleGET(title)
        res.status(200).json(data)
    } catch (error) {
        console.error('Error obteniendo curso personalizado por titulo', error.message);
        res.status(404).json({
            message: 'Error al obtener curso personalizado por titulo',
            error: error.message
        })
    }
};


export const coursePersonalizedNew = async (req, res) => {
    try {
        const { 
            title,
            description,
            duration,
            company_id,
            state_id,
            type_id
        } = req.body
        const data = await personalizedNewCoursePOST(title, description, duration, company_id, state_id, type_id)
        res.status(201).json(data);
    } catch (error) {
        console.error('Error al crear un curso personalizado nuevo', error.message);
        res.status(404).json({
            message: 'Error al crear curso personalizado',
            error: error.message
        })
    }
};


export const coursePersonalizedUpdatePUT = async (req, res) => {
    try {
        const { id } = req.params
        const { 
            title,
            description,
            duration,
            company_id,
            state_id,
            type_id
        } = req.body
        const data = await personalizedUpdatePUT(title, description, duration, company_id, state_id, type_id, id)
        res.status(200).json(data)
    } catch (error) {
        console.error('Error al actualizar curso personalizado', error.message);
        res.status(404).json({
            message: 'Error al actualizar curso personalizado',
            error: error.message
        })
    }
};


export const coursePersonalizedRemoveByIdDELETE = async (req, res) => {
    try {
        const { id } = req.params
        const data = await personalizedRemoveByIdDELETE(id)
        res.status(200).json(data)
    } catch (error) {
        console.error('Error al eliminar curso personalizado por Id', error.message);
        res.status(404).json({
            message: 'UPS, no se pudo eliminar el curso personalizado, intentar nuevamente',
            error: error.message
        })
    }
};


export const coursePersonalizedRemoveByTitleDELETE = async (req, res) => {
    try {
        const { title } = req.body
        const data = await personalizedRemoveByTitleDELETE(title)
        res.status(200).json(data)
    } catch (error) {
        console.error('Error a eliminar curso personalizado por titulo', error.message);
        res.status(404).json({
            message: 'UPS, no se pudo eliminar el curso personalizado, intentar nuevamente',
            error: error.message
        })
        
    }
};