import { 
    searchAllUsers,
    searchUserId,
    searchUserEmail,
    createUser,
    updateUser,
    deleteUser,
    deleteByEmail
} from "../services/userService.js";


export const showGetAllUser = async (req, res) => {
    try {
        const user = await searchAllUsers()
        res.status(200).json(user)
    } catch (error) {
        console.error('Error en getAllUser:', error.message)

        res.status(500).json({
            message: 'error al obtener todos los usuarios',
            error: error.message
        })
    }
};

export const showGetUserId = async (req, res) => {
    try {
        const id_user = req.params
        const userId = await searchUserId(id_user)
        res.status(200).json(userId)
    } catch (error) {
        console.error('Error en obtener usuario por id', error.message);
        res.status(500).json({
            message: 'Error obteniendo usuario',
            error: error.message
        })
    }
};


export const showGetUserEmail = async (req, res) => {
    try {
        const email  = req.params
        const userEmail = await searchUserEmail(email);
        res.status(200).json(userEmail)
    } catch (error) {
        console.error('Error al obtener usuario por email:', error.message);

        res.status(500).json({
            message: 'Error al obtener email',
            error: error.message
        })
    }
};


export const showCreateUser = async (req, res) => {
    try {
        const { 
            name_user,
            email,
            password_user
        } = req.body
        const create = await createUser(name_user, email, password_user)
        res.status(201).json(create)
    } catch (error) {
        console.error('ERROR:', error.message);

        res.status(500).json({
            message: 'Error al crear usuario',
            error: error.message
        })
    }
};


export const showUpdateUser = async (req, res) => {
    try {
        const { 
            name_user,
            email,
            password_user
        } = req.body
        const updateUserId = await updateUser(name_user, email, password_user)
        res.status(202).json(updateUserId)
    } catch (error) {
        console.error('Error:', error.message);
        
        res.status(500).json({
            message: 'Error al actualizar usuario',
            error: error.message
        })
    }
};


export const showDeleteUserId = async (req, res) => {
    try {
        const id_user = req.params
        const userId = await deleteUser(id)
        res.status(200).json(userId)
    } catch (error) {
        console.error('Error: ', error.message);
        
        res.status(500).json({
            message: 'Error al eliminar usuario por id',
            error: error.message
        })
    }
};


export const showDeleteUserEmail = async (req, res) => {
    try {
        const email = req.params
        const userEmail = await deleteByEmail(email)
        res.status(200).json(userEmail)
    } catch (error) {
        console.error('Error: ', error.message);
        
        res.status(500).json({
            message: 'Error al eliminar usuario por email',
            error: error.message
        })
    }
};

