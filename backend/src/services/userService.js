import { 
    getUsers, 
    getUsersId, 
    getUsersEmail, 
    postUser,
    putUserid,
    deleteUserId,
    deleteUserEmail
} from "../models/user_queries.js";



export const searchAllUsers = async () => {
    const existing = await getUsers();
    return existing
};


export const searchUserId = async (id_user) => {
    if(!id_user || isNaN(id_user)) {
        throw new Error('El ID debe ser un numero valido')
    }
    
    const existingUser = await getUsersId(id_user)

    if(!existingUser) {
        throw new Error('User does not exist')
    } 
    return existingUser
};


export const searchUserEmail = async (email) => {
    if(!email || email.leght === 0) {
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

    const name_user = username
    const password_user = password
    const defaultRole = 2;
    
    const createId = await postUser(name_user, email, password_user, defaultRole)

    if(!createId) {
        throw new Error('ERROR DE NUEVO')
    }
    return createId
};


export const updateUser = async (username, email, password) => {
    if(!username || !email || !password) {
        throw new Error('Campo obligatorios')
    }

    const name_user = username
    const password_user = password
    const updateId = await putUserid(name_user, email, password_user)

    if(!updateId) {
        throw new Error('Usuario no existe');
    }
    return updateId
};


export const deleteUser = async (id_user) => {
    if(!id_user || isNaN(id_user)) {
        throw new Error('El di tiene que ser un numero valido')
    }

    const deleteId = await deleteUserId(id_user)

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


