import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET;

export const crearToken = async (user) => {
    return jwt.sign(user.user_id, user.email, user.id_role, secretKey, {expiresIn: '24h'})
}


export const validarToken = async (token) => {
    return jwt.verify(token, secretKey)
}