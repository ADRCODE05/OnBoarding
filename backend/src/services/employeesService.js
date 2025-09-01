import { 
        deleteEmployeesById,
        deleteEmployeesByIdentification,
        getEmployee,
        getEmployeeById,
        getEmployeeByidentification,
        postEmployess,
        putEmployeesById,
        putEmployeesByIdentification
    } from "../models/employeeQueries.js";



export const allEmployee = async () => {
    const data = getEmployee();
    return data
};


export const searchEmployeeById = async (employee_id) => {
    employee_id = Number(employee_id)
    if(!employee_id) {
        throw new Error('Campo obligatorio')
    }
    
    if(isNaN(employee_id)) {
        throw new Error('Error el dato ingresado tiene q ser un numero')
    }
    const data = await getEmployeeById(employee_id)

    if(!data) {
        throw new Error('El id del empleado no existe')
    }
    return data
};

export const searchEmployeeByidentification = async (identification_number) => {
    if(!identification_number) {
        throw new Error('Este campo es obligatorio')
    }

    const data = await getEmployeeByidentification(identification_number)
    
    if(!data) {
        throw new Error("Empleado no existe")
    }

    return data
};


export const newEmployee = async (full_name, identification_number, phone, charge_id, company_id, user_id) => {
        charge_id = Number(charge_id)
    company_id = Number(company_id)
    user_id = Number(user_id)


    if(!full_name || !identification_number || !phone || !charge_id || !company_id || !user_id) {
        throw new Error('Campos obligatorios')
    }

    if (!isNaN(charge_id) || !isNaN(company_id)) {
        throw new Error("El dato a buscar tiene que ser un numero entero valido");
    }
    
    const data = await postEmployess(full_name, identification_number, phone, charge_id, company_id, user_id)

    if(!data) {
        throw new Error('Error al crear empleado')
    }
    return data
};


export const employeeByIdPUT = async (full_name, identification_number, phone, charge_id, company_id, user_id, employee_id) => {
    charge_id = Number(charge_id)
    company_id = Number(company_id)
    user_id = Number(user_id)
    employee_id = Number(employee_id)

    if(!full_name || !identification_number || !phone || !charge_id || !company_id || !user_id || !employee_id) {
        throw new Error('Los campos son obligatorios')
    }

    if(isNaN(user_id) || isNaN(charge_id) || isNaN(company_id) || isNaN(employee_id)) {
        throw new Error('el ID tiene que ser un numero valido')
    };

    const data = await putEmployeesById(full_name, identification_number, phone, charge_id, company_id, user_id, employee_id)
    console.log(data);
    
    
    if(!data) {
        throw new Error('No existe el empleado por id')
    }

    return data
}



export const employeeByidentificationPUT = async (full_name, newIdentification, phone, charge_id, company_id, user_id, idenctication_number) => {
    charge_id = Number(charge_id)
    company_id = Number(company_id)
    user_id = Number(user_id)

    if(!full_name || !newIdentification || !phone || !charge_id || !company_id || !user_id || !idenctication_number) {
        throw new Error('Campo obligatorio')
    }

    if (!isNaN(charge_id) || !isNaN(company_id) || !isNaN(user_id)) {
        throw new Error("El dato a buscar tiene que ser un numero entero valido");
    }


    const data = await putEmployeesByIdentification(full_name, newIdentification, phone, charge_id, company_id, idenctication_number)

    if(!data) {
        throw new Error('Empleado no existe por numero de identificacion')
    }
    return data
}


export const deleteEmployee = async (employee_id) => {
    employee_id = Number(employee_id)

    if(!employee_id) {
        throw new Error('Campo obligatorio');
    }

    if(isNaN(employee_id)) {
        throw new Error('El id tiene que ser un numero valido')
    }

    const data = await deleteEmployeesById(employee_id)

    if(!data) {
        throw new Error('Error al eliminar empleado')
    }

    return data
}

export const removeEmployeesByIdentification = async (idenctication_number) => {
    if(!idenctication_number) {
        throw new Error('Campo obligatorio')
    }

    const data = await deleteEmployeesByIdentification(idenctication_number)

    if(!data) {
        throw new Error('No se elimino el empleado por numero de identificacion')
    }

    return data
}