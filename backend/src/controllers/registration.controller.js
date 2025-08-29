import { 
        allRegister,
        registerById,
        newRegister,
        editAllRegister,
        editRegisterById,
        eliminateRegister
} from "../services/registrationsService.js";


export const registrationAll = async (req, res) => {
    try {
        const data = await allRegister()
        res.status(200).json(data)
    } catch (error) {
        console.error('Error al obtener registros', error.message);
        res.status(404).json({
            message: "Error al buscar y obtener todos los registros",
            error: error.message
        })
    }
};


export const registrationById = async (req, res) => {
    try {
        const { registration_id } = req.params
        const data = await registerById(registration_id)
        res.status(200).json(data)
    } catch (error) {
        console.error('Error al obtener registro por id', error.message);
        res.status(404).json({
            message: 'Error no se pudo obtener informacion',
            error: error.message
        })
    }
};


export const registrationCreate = async (req, res) => {
    try {
        const {
            employee_id,
            star_date,
            end_date,
            coursep_id,
            course_id
        } = req.body
        const data = await newRegister(employee_id, star_date, end_date, coursep_id, course_id);
        res.status(200).json(data)
    } catch (error) {
        console.error('error al crear registro', error.message);
        res.status(404).json({
            message: 'No se pudo crear un nuevo registro',
            error: error.message
        })
    }
};

export const registrationUpdate = async (req, res) => {
    try {
        const { registration_id } = req.params
        const { 
            star_date,
            end_date
        } = req.body

        const data = await editAllRegister(star_date, end_date, registration_id)
        res.status(200).json(data)
    } catch (error) {
        console.error('no se pudo editar el registro por star_date y end_date', error.message);
        res.status(304).json({
            meesage: 'Error al actualizar el registro',
            error: error.message
        })   
    }
};


export const registrationUpdateAll = async (req, res) => {
    try {
        const { registration_id } = req.params
        const { 
            employee_id,
            star_date,
            end_date,
            coursep_id,
            course_id,
        } = req.body 

        const data = await editRegisterById(employee_id, star_date, end_date, coursep_id, course_id, registration_id)
        res.status(200).json(data)
    } catch (error) {
        console.error('No se pudo editar el registro por id con todos los datoa', error.message);
        res.status(304).json({
            message: 'No se pudo acctualizar el registro',
            error: error.meesage
        })
        
    }
};


export const registrationdelete = async (req, res) => {
    try {
        const { registration_id } = req.params
        const data = await eliminateRegister(registration_id)
        res.status(200).json(data)
    } catch (error) {
        console.error('No se pudo eliminar el registro', error.meesage);
        res.status(404).json({
            message: 'Error no se pudo eliminar el registro',
            error: error.message
        })
    }
}