import bcrypt from 'bcrypt'

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
        console.error('Error getting all users:', error.message)

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
        console.error('Error getting user by id', error.message);
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
        console.error('Error getting user by email:', error.message);

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
        console.error('Error creating user:', error.message);
        res.status(500).json({
            message: 'Error creating user',
            error: error.message
        })
    }
};


export const showUpdateUser = async (req, res) => {
    try {
        const { user_id } = req.params
        const { 
            username,
            email,
            password
        } = req.body
        const passwordHash = await bcrypt.hash(password, 10)
        const updateUserId = await updateUser(user_id, username, email, passwordHash)
        res.status(202).json(updateUserId)
    } catch (error) {
        console.error('Error updating user:', error.message);
        
        res.status(500).json({
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
        console.error('Error deleting user by id: ', error.message);
        
        res.status(500).json({
            message: 'Error deleting user by id',
            error: error.message
        })
    }
};


export const showDeleteUserEmail = async (req, res) => {
    try {
        const { email } = req.params
        console.log(email);
        
        const userEmail = await deleteByEmail(email)
        console.log(userEmail);
        
        res.status(200).json(userEmail)
    } catch (error) {
        console.error('Error deleting user by email: ', error.message);
        
        res.status(500).json({
            message: 'Error deleting user by email',
            error: error.message
        })
    }
};

