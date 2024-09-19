import React from 'react';

function EmployeeItem({ photo, name, role, callOffice }) {
  return (
    <div className="employee-item">
      <img src={photo} alt={`${name}'s photo`} />
      <div>
        <h2>{name}</h2>
        <p>{role}</p>
        <p>{callOffice}</p>
      </div>
    </div>
  );
}

export default EmployeeItem;