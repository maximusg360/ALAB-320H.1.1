import React, { useState } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList';
import './App.css';

const employeesData = [
  {
    id: 1,
    photo: 'path/to/photo1.jpg',
    name: 'John Doe',
    role: 'Software Engineer',
    callOffice: '123-456-7890',
  },
  {
    id: 2,
    photo: 'path/to/photo2.jpg',
    name: 'Jane Smith',
    role: 'Product Manager',
    callOffice: '987-654-3210',
  },
  // Add more employees as needed
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSort = (key) => {
    setSortKey(key);
  };

  const filteredEmployees = employeesData
    .filter((employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortKey === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortKey === 'role') {
        return a.role.localeCompare(b.role);
      }
      return 0;
    });

  return (
    <>
      <Header />
      <SearchBar onSearch={handleSearch} onSort={handleSort} />
      <EmployeeList employees={filteredEmployees} />
    </>
  );
}

export default App;