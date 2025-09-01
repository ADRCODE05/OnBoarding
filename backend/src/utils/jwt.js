import jwt from 'jsonwebtoken';

export const crearToken = (user) => {
    return jwt.sign(
        {
            user_id: user.user_id,
            email: user.email,
            id_role: user.role_id,
            role: user.name_role
        },
        process.env.JWT_SECRET, // ✅ esto es obligatorio
        {
            expiresIn: '1d' // ⏰ opcional, pero recomendado
        }
    );
};



export const validarToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
        
    } catch (error) {
        throw new Error('Token inválido o expirado')
    }
}