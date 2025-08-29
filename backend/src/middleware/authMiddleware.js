import { validarToken } from "../utils/jwt.js";

export const authMiddleware =    (req, res, next) => {
    const AuthHeaders = req.headers['authorization']
    if(!AuthHeaders) {
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
        res.status(401).json({
            error: 'Token invalido o expirado'
        });
        
    }
}


export const authRol = async (rolAsignado) => {
    return (req, res, next) => {
        if(!req.user) {
            return res.status(401).json({
                error: 'Usuario no autenticado'
            })
        }
        
        if(req.user.id_role !== rolAsignado) {
            return res.status(403).json({
                error: 'Acceso denegado'
            })
        }
        next()
    }
}
    