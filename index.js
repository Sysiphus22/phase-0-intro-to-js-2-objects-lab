const employee = {
  name: 'John Doe',
  streetAddress: '11 Broadway',
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value,
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}


console.log(employee);

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Jane Smith');
console.log(updatedEmployee);

destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '456 Elm Street');
console.log(employee);

const employeeWithoutStreet = deleteFromEmployeeByKey(employee, 'streetAddress');
console.log(employeeWithoutStreet);

destructivelyDeleteFromEmployeeByKey(employee, 'name');
console.log(employee);

