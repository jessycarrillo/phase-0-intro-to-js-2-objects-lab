const employee = {
    employeeName: "Edgar Gonzalez", 
    streetAddress: "48th ave",
}
    function updateEmployeeWithKeyAndValue(obj, key, value) {
        const newObj = { ...obj};
        newObj[key] = value;

        return newObj;
        
    }

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value; 
  
    return obj;
}

function deleteFromEmployeeByKey(obj,key){
    const newObj = { ...obj};
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}