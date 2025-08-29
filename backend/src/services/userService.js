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
    const user = await getUsersEmail(email.toLowerCase())
    if(!user) {
        throw new Error('Credenciales invalidas')
    }

    const data = await bcrypt.compare(password, user.password)
    if(!data) {
        throw new Error('Credenciales invalidas')
    }
    const token = await crearToken({
        id: user.user_id,
        email: user.email,
        id_role: user.role_id
    })
    delete user.password
    return  { token, user }
}



export const searchAllUsers = async () => {
    const data = await getUsers();
    return data
};



export const searchUserId = async (user_id) => {
    user_id = Number(user_id)


    if(!user_id) {
        throw new Error('El campo es obligatorio')
    }


    if(isNaN(user_id)) {
        throw new Error('El id tiene que ser un numero valido');
    }
    
    const data = await getUsersId(user_id)

    if(!data) {
        throw new Error('User does not exist')
    } 
    return data
};


export const searchUserEmail = async (email) => {
    if(!email) {
        throw new Error('The email is empty')
    }
    
    const data = await getUsersEmail(email)
    
    if(!data) {
        throw new Error('The email does not match any')
    }
    return data
};


export const createUser = async (username, email, password) => {
    if(!username || !email || !password) {
        throw new Error('Required fields')
    }

    const defaultRole = 3;
    
    const data = await postUser(username, email, password, defaultRole)
    
    if(!data || !data.user_id) {
        throw new Error('ERROR DE NUEVO')
    }
    return data
};


export const updateUser = async (username, email, password, user_id) => {
    user_id = Number(user_id)

    if(!username || !email || !password || !user_id) {
        throw new Error('Campo obligatorios')
    } 

    if(isNaN(user_id)) {
        throw new Error('El id del usuario tiene que ser un numero valido')
    }
    const data = await putUserid(username, email, password, user_id)

    if(!data) {
        throw new Error('Usuario no existe');
    }
    return data
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
    user_id = Number(user_id)

    if(!user_id) {
        throw new Error('El campo es obligatorio')
    }

    if(isNaN(user_id)) {
        throw new Error('El id tiene que ser un numero valido')
    }

    const data = await deleteUserId(user_id)

    if(!data) {
        throw new Error('Usuario no encontrado')
    }
    return data
};


export const deleteByEmail = async (email) => {
    if(!email) {
        throw new Error('El campo es obligatorio')
    }

    const data = await deleteUserEmail(email)

    if(!data) {
        throw new Error('Usuario no encontrado')
    }
    return data
};


