import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET;

export const crearToken = (user) => {
    return jwt.sign({ 
        id: user.user_id,
        email: user.email,
        id_role: user.role_id}, secretKey, {expiresIn: '24h'})
}


export const validarToken = (token) => {
    try {
        return jwt.verify(token, secretKey)
        
    } catch (error) {
        throw new Error('Token inválido o expirado')
    }
}