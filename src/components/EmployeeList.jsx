import React from 'react';
import EmployeeItem from './EmployeeItem';

function EmployeeList({ employees }) {
  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <EmployeeItem
          key={employee.id}
          photo={employee.photo}
          name={employee.name}
          role={employee.role}
          callOffice={employee.callOffice}
        />
      ))}
    </div>
  );
}

export default EmployeeList;