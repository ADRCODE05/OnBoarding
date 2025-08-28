import { 
        allRegister,
        registerById,
        newRegister,
        editAllRegister,
        editRegisterById,
        eliminateRegister
} from "../services/registrationsService";


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
        console.error('error al crear registro', error.message '');
        res.status(404).json({
            message: 'No se pudo crear un nuevo registro',
            error: error.message
        })
    }
}