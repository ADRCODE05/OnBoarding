import { 
        deleteEmployeesById,
        getEmployee,
        getEmployeeById,
        postEmployess,
        putEmployeesById
    } from "../models/employee_queries.js";



export const allEmployee = async () => {
    const employeeAll = getEmployee();
    return employeeAll
};


export const searchEmployeeById = async (employee_id) => {
    if(!employee_id) {
        throw new Error('Campo obligatorio')
    }
    
    if(isNaN(employee_id)) {
        throw new Error('Error el dato ingresado tiene q ser un numero')
    }
    const existing = await getEmployeeById(employee_id)

    if(!existing) {
        throw new Error('El id del empleado no existe')
    }
    return existing
};


export const newEmployee = async (full_name, identification_number, phone, charge_id, company_id, user_id) => {
    if(!full_name || !identification_number || !phone || !charge_id || !company_id || !user_id) {
        throw new Error('Campos obligatorios')
    }

    const employeeNew = await postEmployess(full_name, identification_number, phone, charge_id, company_id, user_id)

    if(!employeeNew) {
        throw new Error('Error al crear empleado')
    }
    return employeeNew
};


export const deleteEmployee = async (employee_id) => {
    if(!employee_id) {
        throw new Error('Campo obligatorio');
    }

    const employeeDelete = await deleteEmployeesById(employee_id)

    if(!employeeDelete) {
        throw new Error('Error al eliminar empleado')
    }

    return employeeDelete
}