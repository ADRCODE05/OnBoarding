import bcrypt from 'bcrypt'

import { 
    searchAllUsers,
    searchUserId,
    searchUserEmail,
    createUser,
    updateUser,
    deleteUser,
    deleteByEmail,
    loginUser,
    updateUserEmail,
    createUserAdmin
} from "../services/userService.js";

export const login = async (req, res) => {
    try {
        const { 
            email,
            password
        } = req.body
        const { token, user } = await loginUser(email, password)
        res.status(200).json({
            message: 'Login exitoso', token,
            user: {
                id: user.user_id,
                email: user.email,
                id_role: user.role_id,
                role: user.name_role,
            }
        })
    } catch (error) {
        console.error(error.message);
        res.status(401).json({
            message: 'No se puedo autorizar el inicio de sesion, vuelva a intentarlo mas tarde....',
            error: error.message
        })
        
    }
}



export const showGetAllUser = async (req, res) => {
    try {
        const user = await searchAllUsers()
        res.status(200).json(user)
    } catch (error) {
        console.error(error.message)

        res.status(500).json({
            message: 'Error getting all users',
            error: error.message
        })
    }
};



export const showGetUserId = async (req, res) => {
    try {
        const { user_id } = req.params
        const userId = await searchUserId(user_id)
        res.status(200).json(userId)
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: 'Error getting user',
            error: error.message
        })
    }
};



export const showGetUserEmail = async (req, res) => {
    try {
        const { email } = req.params
        const userEmail = await searchUserEmail(email);
        res.status(200).json(userEmail)
    } catch (error) {
        console.error(error.message);

        res.status(500).json({
            message: 'Error getting email',
            error: error.message
        })
    }
};



export const showCreateUser = async (req, res) => {
    try {
        const { 
            username,
            email,
            password
        } = req.body
        
        const passwordHash = await bcrypt.hash(password, 10)
        const create = await createUser(username, email, passwordHash)
        res.status(201).json(create)

    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: 'Error creating user',
            error: error.message
        })
    }
};

export const showCreateUserAdmin = async (req, res) => {
    try {
        const { 
            username,
            email,
            password,
            role_id
        } = req.body
        
        const passwordHash = await bcrypt.hash(password, 10)
        const create = await createUserAdmin(username, email, passwordHash, role_id)
        res.status(201).json(create)

    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: 'Error creating user',
            error: error.message
        })
    }
};


export const showUpdateUserEmail = async (req, res) => {
    try {
        const { email } = req. params
        const { 
            username,
            newEmail,
            password
        } = req.body
        const passwordHash = await bcrypt.hash(password, 10)
        const data = await updateUserEmail(username, newEmail, passwordHash, email)
        res.status(202).json(data)
    } catch (error) {
        console.error(error.message);
        res.status(404).json({
            message: 'Error al actualizar datos del usuario',
            error: error.message
        })
    }
}



export const showUpdateUser = async (req, res) => {
    try {
        const { user_id } = req.params
        const { 
            username,
            email,
            password
        } = req.body || {}
        const passwordHash = await bcrypt.hash(password, 10)
        const updateUserId = await updateUser(username, email, passwordHash, user_id)
        res.status(202).json(updateUserId)
    } catch (error) {
        console.error(error.message);
        
        res.status(404).json({
            message: 'Error updating user',
            error: error.message
        })
    }
};



export const showDeleteUserId = async (req, res) => {
    try {
        const { user_id } = req.params
        const userId = await deleteUser(user_id)
        res.status(200).json(userId)
    } catch (error) {
        console.error(error.message);
        
        res.status(404).json({
            message: 'Error deleting user by id',
            error: error.message
        })
    }
};



export const showDeleteUserEmail = async (req, res) => {
    try {
        const { email } = req.params
        
        const userEmail = await deleteByEmail(email)
        
        res.status(200).json(userEmail)
    } catch (error) {
        console.error(error.message);
        
        res.status(404).json({
            message: 'Error deleting user by email',
            error: error.message
        })
    }
};

