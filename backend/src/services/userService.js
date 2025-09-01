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
    putUserEmail,
    getUsersEmailLogin,
    getMe,
    getProfile
} from "../models/userQueries.js";



export const loginUser = async (email, password) => {
    const user = await getUsersEmailLogin(email.toLowerCase())
    if(!user) {
        throw new Error('Credenciales invalidas')
    }
    
    const data = await bcrypt.compare(password, user.password)
    
    if(!data) {
        throw new Error('Credenciales invalidas')
    }
    const token = crearToken({
        user_id: user.user_id,
        email: user.email,
        id_role: user.role_id,
        role: user.name_role    
    })
    delete user.password
    return  { token, user }
}


export const profileData = async (idUser) => {
    if(!idUser) {
        throw new Error('El campo del id esta vacio')
    }

    const data = await getProfile(idUser)

    if(!data) {
        throw new Error('El usuario no existe')
    }

    return data
}


export const DataMe = async (userId) => {
    if(!userId) {
        throw new Error('No se pudo obtener el dato necesario');
        
    }
    const data = await getMe(userId)

    if(!data) {
        throw new Error('el dato no existe')
    }

    return data

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


export const createUserAdmin = async (username, email, password, role_id) => {
    role_id = Number(role_id)
    if(!username || !email || !password || !role_id) {
        throw new Error('Required fields')
    }

    if(isNaN(role_id)) {
        throw new Error('the id must be a valid number')
    }
    
    const data = await postUser(username, email, password, role_id)
    
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


