import { validarToken } from "../utils/jwt.js";

export const authMiddleware = async (req, res, next) => {
    const AuthHeaders = req.headers['authorization']
    if(!authorization) {
        return res.status(401).json({
            error: 'Token requerido'
        })
    }
    
    const token = AuthHeaders.split(' ')[1]
    try {
        const result = validarToken(token);
        req.user = result
        next()
    } catch (error) {
        res.status(498).json({
            error: 'Error token invalido'
        });
        
    }
}


export const authRol = async (rolAsignado) => {
    return (req, res, next) => {
        if(!res.user) {
            return res.status(401).json({
                error: 'usuario no autenticado'
            })
        }
        
        if(req.user.id_role !== rolAsignado) {
            res.status(401).json({
                error: 'Acceso denegado'
            })
        }
        next()
    }
}
    