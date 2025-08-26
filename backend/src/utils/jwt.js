import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET;

export const crearToken = async (email) => {
    return jwt.sign({email}, secretKey, {expiresIn: '24h'})
}


export const validarToken = async (token) => {
    return jwt.verify(token, secretKey)
}