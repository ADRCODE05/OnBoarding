import jwt from 'jsonwebtoken';

export const crearToken = (user) => {
    return jwt.sign({ 
        id: user.user_id,
        email: user.email,
        id_role: user.role_id,
        name_role: user.name_role
        }, process.env.JWT_SECRET, {expiresIn: '24h'})
}


export const validarToken = (token) => {
    try {
        return jwt.verify(token, secretKey)
        
    } catch (error) {
        throw new Error('Token inválido o expirado')
    }
}