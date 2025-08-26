import { validarToken } from "../utils/jwt.js";

export const authMiddleware = async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if(!token) {
        res.status(401).json({
            error: 'Error token requerido'
        })
    }
    try {
        const result = validarToken(token);
        req.users = result
        next()
    } catch (error) {
        res.status(498).json({
            error: 'Error token invalido'
        });
        
    }
}


export const authRol = async (rolAsignado) => {
    return (req, res, next) => {
        if(req.users.id_role !== rolAsignado) {
            res.status(401).json({
                error: 'Acceso denegado  ❎'
            })
        }
        next()
    }
}
    