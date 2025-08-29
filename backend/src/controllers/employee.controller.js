import { 
    allEmployee,
    searchEmployeeById,
    newEmployee,
    deleteEmployee,
    searchEmployeeByidentification,
    employeeByIdPUT
} from "../services/employeesService.js";


export const viewsAllEmployee = async (req, res) => {
    try {
        const employee = await allEmployee()
        res.status(200).json(employee)
    } catch (error) {
        console.error(error.message);
        
        res.status(404).json({
            message: 'Error al obtener empleados',
            error: error.message
        })
    }
};


export const viewsEmployeeById = async (req, res) => {
    try {
        const { employee_id } = req.params
        const employeeId = await searchEmployeeById(employee_id)
        res.status(200).json(employeeId)
    } catch (error) {
        console.error(error.message);
        
        res.status(404).json({
            message: 'Error al obtener empleado por id',
            error: error.message
        })
        
    }
};


export const viewsEmployeeByIdentification = async (req, res) => {
    try {
        const { identification_number } = req.params
        const data = await searchEmployeeByidentification(identification_number)
        res.status(200).json(data)
    } catch (error) {
        console.error(error.message)
        res.status(404).json({
            message: 'No se encontro el empleado con esa identificacion',
            error: error.message
        })
    }
}


export const viewsNewEmployee = async (req, res) => {
    try {
        const { 
            full_name,
            identification_number,
            phone,
            charge_id,
            company_id,
            user_id
        } = req.body
        const employeeNew = await newEmployee(full_name, identification_number, phone, charge_id, company_id, user_id);
        res.status(201).json(employeeNew);
    } catch (error) {
        console.error('ERROR: ', error.message);
        res.status(404).json({
            message: 'Error al crear nuevo empleado',
            error: error.message
        })
        
    }
};


export const viewsPutEmployeesById = async (req, res) => {
    try {
        const { employee_id } = req.params
        const { 
            full_name,
            identification_number,
            phone,
            charge_id,
            company_id,
            user_id
        } = req.body
        const data = await employeeByIdPUT(full_name, identification_number, phone, charge_id, company_id, user_id, employee_id)
        res.status(200).json(data)
    } catch (error) {
        console.error(error.message);
        res.status(404).json({
            message: 'No se pudo actualizar el cliente',
            error: error.message
        })
    }
}


export const viewsPutEmployeesByIdentification = async (req, res) => {
    try {
        const { identification_number } = req.params
        const { 
            full_name,
            newIdentification,
            phone,
            charge_id,
            company_id,
            user_id
        } = req.body
        const data = await employeeByIdPUT(full_name, newIdentification, phone, charge_id, company_id, user_id, identification_number)
        res.status(200).json(data)
    } catch (error) {
        console.error(error.message);
        res.status(404).json({
            message: 'No se pudo actualizar el cliente',
            error: error.message
        })
    }
}


export const viewsDeleteEmployees = async (req, res) => {
    try {
        const { id } = req.params
        const doAwayEmployee = await deleteEmployee(id) 
        res.status(200).json(doAwayEmployee);
    } catch (error) {
        console.error(error.message);
        res.status(404).json({
            message: 'Error al eliminar empleado',
            error: error.message
        })
        
        
    }
}

export const viewsDeleteEmployeesByIdentification = async (req, res) => {
    try {
        const { identification_number } = req.params
        const doAwayEmployee = await deleteEmployee(identification_number) 
        res.status(200).json(doAwayEmployee);
    } catch (error) {
        console.error(error.message);
        res.status(404).json({
            message: 'Error al eliminar empleado',
            error: error.message
        })
        
        
    }
}