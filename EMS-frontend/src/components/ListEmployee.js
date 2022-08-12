import React, { useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import EmployeeService from '../services/EmployeeService';
import './ListEmployee.css'

const ListEmployee = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getAllEmployees();
    }, [])

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error)
        })
    }

    const deleteEmployee = (employeeId) => {
        EmployeeService.deleteEmployee(employeeId).then((response) => {
            getAllEmployees();
        }).catch(error => {
            console.log(error)
        })
    }

  return (
    <div className='container'>
        <h2>Employees</h2>
        <Link to="/add-employee" className="add-btn">Add</Link>
        <table className="table">
            <thead>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {
                    employees.map(
                        employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.first_name}</td>
                            <td>{employee.last_name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.department}</td>
                            <td>
                                <button className='edit-btn'>
                                    <Link className='edit-btn' to={`/edit-employee/${employee.id}`}>Edit</Link>
                                </button>
                                <button className="delete-btn" onClick={() => deleteEmployee(employee.id)} style = {{marginLeft:"10px"}}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployee