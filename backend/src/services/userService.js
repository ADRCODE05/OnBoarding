import bcrypt from 'bcrypt';
import { crearToken } from '../utils/jwt.js';

import { 
    getUsers, 
    getUsersId, 
    getUsersEmail, 
    postUser,
    putUserid,
    deleteUserId,
    deleteUserEmail,
    confirmUser,
    putUserEmail
} from "../models/userQueries.js";



export const loginUser = async (email, password) => {
    const user = await getUsersEmail(email)
    if(!user) {
        throw new Error('Usuario no encontrado')
    }

    const validate = await bcrypt.compare(password, user.password)
    if(!validate) {
        throw new Error('Credenciales invalidas')
    }
    const token = await crearToken(user.email)
    return  { token, user }
}



export const searchAllUsers = async () => {
    const existing = await getUsers();
    return existing
};



export const searchUserId = async (user_id) => {
    if(!user_id || isNaN(user_id)) {
        throw new Error('El ID debe ser un numero valido')
    }
    
    const existingUser = await getUsersId(user_id)

    if(!existingUser) {
        throw new Error('User does not exist')
    } 
    return existingUser
};


export const searchUserEmail = async (email) => {
    if(!email) {
        throw new Error('The email is empty')
    }
    
    const existing = await getUsersEmail(email)
    
    if(!existing) {
        throw new Error('The email does not match any')
    }
    return existing
};


export const createUser = async (username, email, password) => {
    if(!username || !email || !password) {
        throw new Error('Required fields')
    }

    const defaultRole = 2;
    
    const newUser = await postUser(username, email, password, defaultRole)
    
    if(!newUser || !newUser.user_id) {
        throw new Error('ERROR DE NUEVO')
    }
    return newUser
};


export const updateUser = async (username, email, password, user_id) => {
    if(!user_id||!username || !email || !password) {
        throw new Error('Campo obligatorios')
    } 

    if(isNaN(user_id)) {
        throw new Error('El id del usuario tiene que ser un numero valido')
    }
    const updateId = await putUserid(user_id, username, email, password)

    if(!updateId) {
        throw new Error('Usuario no existe');
    }
    return updateId
};


export const updateUserEmail = async (username, newEmail, password, email) => {
    if(!username || !newEmail || !password || !email) {
        throw new Error('Campo obligatorios')
    }


    const data = await putUserEmail(username, newEmail, password, email)

    if(!data) {
        throw new Error('usuario no existe');
    }

    return data
}


export const deleteUser = async (user_id) => {
    if(!user_id || isNaN(user_id)) {
        throw new Error('El di tiene que ser un numero valido')
    }

    const deleteId = await deleteUserId(user_id)

    if(!deleteId) {
        throw new Error('Usuario no encontrado')
    }
    return deleteId
};


export const deleteByEmail = async (email) => {
    if(!email) {
        throw new Error('El campo es obligatorio')
    }

    const deleteEmail = await deleteUserEmail(email)

    if(!deleteEmail) {
        throw new Error('Usuario no encontrado')
    }
    return deleteEmail
};


