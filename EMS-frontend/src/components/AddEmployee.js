import React, { useState, useEffect } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';
import './AddEmployee.css';

const AddEmployee = () => {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const saveEmployee = (e) => {
        e.preventDefault();
        const employee = {first_name, last_name, email, department}

        if(id) {
            EmployeeService.updateEmployer(id, employee).then(() => {
                navigate('/employees');
            }).catch(error => {
                console.log(error);
            });
        } else {
            EmployeeService.createEmployee(employee).then((response) => {
                console.log(response.data);
                navigate('/employees');
            }).catch(error => {
                console.log(error);
            });
        }
    }

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((response) => {
            setFirstName(response.data.first_name)
            setLastName(response.data.last_name)
            setEmail(response.data.email)
            setDepartment(response.data.department)
        }).catch(error => {
            console.log(error)
        });
    });

    const title = () => {
        if(id) {
            return <h2>Update Employee</h2>
        } else {
            return <h2>Add Employee</h2>
        }
    }
    
  return (
    <div className="body-card">
        <div className="card-container">
            <div className="card-title">
            {
                title()
            }
            </div>
            <form>
                <div className="employee-detail">
                    <div className="input-box">
                        <label className="label">First Name: </label>
                        <input 
                            type="text" 
                            placeholder='Enter first name' 
                            className='form-control' 
                            value={first_name} 
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="input-box">
                        <label className="label">Last Name: </label>
                        <input 
                            type="text" 
                            placeholder='Enter last name' 
                            className='form-control' 
                            value={last_name} 
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="input-box">
                        <label className="label">Email: </label>
                        <input 
                            type="text" 
                            placeholder='Enter email' 
                            className='form-control' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-box">
                        <label className="label">Department: </label>
                        <input 
                            type="text" 
                            placeholder='Enter department' 
                            className='form-control' 
                            value={first_name} 
                            onChange={(e) => setDepartment(e.target.value)}
                        />
                    </div>
                </div>
                <button className='submit-btn' onClick={(e) => saveEmployee(e)}>Submit</button>
                <div className="buttons">
                 <button className='cancel-btn'>
                    <Link to="/employees" className="cancel-btn">Cancel</Link>
                 </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddEmployee