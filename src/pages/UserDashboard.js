import React, { useState } from 'react';

const UserDashboard = () => {
  const [companies, setCompanies] = useState([
    { name: 'Company A', lastCommunication: '2024-12-20', nextCommunication: '2024-12-30', overdue: false },
    { name: 'Company B', lastCommunication: '2024-12-10', nextCommunication: '2024-12-25', overdue: true },
  ]);

  const [showOverdue, setShowOverdue] = useState(false);

  const markAsCompleted = (index) => {
    const updatedCompanies = [...companies];
    updatedCompanies[index].overdue = false;
    updatedCompanies[index].lastCommunication = new Date().toISOString().split('T')[0];
    updatedCompanies[index].nextCommunication = '2025-01-10';
    setCompanies(updatedCompanies);
  };

  const filteredCompanies = showOverdue
    ? companies.filter((company) => company.overdue)
    : companies;

  return (
    <div>
      <h2>User Dashboard</h2>
      <button onClick={() => setShowOverdue(!showOverdue)}>
        {showOverdue ? 'Show All' : 'Show Overdue Only'}
      </button>

      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Last Communication</th>
            <th>Next Communication</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredCompanies.map((company, index) => (
            <tr key={index} style={{ backgroundColor: company.overdue ? 'red' : 'white' }}>
              <td>{company.name}</td>
              <td>{company.lastCommunication}</td>
              <td>{company.nextCommunication}</td>
              <td>{company.overdue ? 'Overdue' : 'On Track'}</td>
              <td>
                <button onClick={() => markAsCompleted(index)}>Mark as Completed</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UserDashboard;