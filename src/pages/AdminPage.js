import React, { useState } from 'react'
const AdminPage = () => {
    const [company, setCompany] = useState({
      name: '',
      location: '',
      linkedin: '',
      emails: '',
      phone: '',
      comments: '',
      communicationPeriodicity: '',
    });
  
    // State for communication methods
    const [communicationMethods, setCommunicationMethods] = useState([
      { name: 'LinkedIn Post', description: 'Post on LinkedIn', sequence: 1, mandatory: true },
      { name: 'LinkedIn Message', description: 'Message on LinkedIn', sequence: 2, mandatory: true },
      { name: 'Email', description: 'Send an Email', sequence: 3, mandatory: true },
      { name: 'Phone Call', description: 'Call the company', sequence: 4, mandatory: false },
      { name: 'Other', description: 'Other methods', sequence: 5, mandatory: false },
    ]);
  
    // Handle adding a new communication method
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here
      };
    const addCommunicationMethod = (method) => {
      setCommunicationMethods((prevMethods) => [...prevMethods, method]);
    };
  
    return (
      <div>
        <h2>Admin Page</h2>
  
        {/* Company Form */}
        <form onSubmit={handleSubmit}>
          {/* Company fields */}
          <button type="submit">Add Company</button>
        </form>
  
        <h3>Communication Methods</h3>
        <ul>
          {communicationMethods.map((method, index) => (
            <li key={index}>
              <strong>{method.name}</strong>: {method.description} (Sequence: {method.sequence}, Mandatory: {method.mandatory ? 'Yes' : 'No'})
            </li>
          ))}
        </ul>
  
        {/* Add Communication Method Button */}
        <button
          onClick={() =>
            addCommunicationMethod({
              name: 'New Method',
              description: 'New Communication Method',
              sequence: communicationMethods.length + 1,
              mandatory: false,
            })
          }
        >
          Add New Communication Method
        </button>
      </div>
    );
  };
  export default AdminPage;