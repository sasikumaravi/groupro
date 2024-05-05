import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Employee() {
    const [id1, setId1] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [mobno, setMobNo] = useState('')
    const [duration, setDuration] = useState()
    const [salary, setSalary] = useState('')
    const [list, setList] = useState([])
    const [name1, setName1] = useState('')
    const [age1, setAge1] = useState('')
    const [email1, setEmail1] = useState('')
    const [mobno1, setMobNo1] = useState('')
    const [salary1, setSalary1] = useState('')
    const [duration1, setDuration11] = useState()
    const [isPopup, setIsPopup] = useState(false)
    const handleSubmit = () => {
        axios.post('http://localhost:3003/employee', { name, age, email, mobno, salary })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        axios.get('http://localhost:3003/employee')
            .then(res => setList(res.data))
            .catch(err => console.log(err))
    })

    const openPopup = (data) => {
        setIsPopup(true)
        setId1(data.id)
        setName1(data.name)
        setAge1(data.age)
        
        setEmail1(data.email)
        setMobNo1(data.mobno)
        setSalary1(data.salary)
    }
    const handleUpdate = () => {
        axios.put(`http://localhost:3003/employee/${id1}`, { name: name1, age: age1, email: email1, mobno: mobno1, salary: salary1 })
            .then(res => setList(res.data))
            .catch(err => console.log(err))
    }
    const handleDelete = (id) => {
        axios.delete(`http://localhost:3003/employee/${id}`)
            .then(res => {
                console.log(res)
                alert('Deleted Successfully')
            })
            .catch(err => { console.log(err) })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Employee Details</h1><br />
                <label>Employee Name</label><br />
                <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} /><br /><br />
                <label>Employee Age</label><br />
                <input type='number' value={age} onChange={(e) => { setAge(e.target.value) }} /><br /><br />
                <label>Employee Email</label><br />
                <input type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} /><br /><br />
                <label>Employee Mobile No.</label><br />
                <input type='number' value={mobno} onChange={(e) => { setMobNo(e.target.value) }} /><br /><br />
                <label>Salary</label><br />
                <input type='number' value={salary} onChange={(e) => { setSalary(e.target.value) }} /><br /><br />
                <button type='submit'>Submit</button>
            </form>

            <table className='table1'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(x => (
                        <tr key={x.id}>
                            <td>{x.name}</td>
                            <td>{x.age}</td>
                            <td>{x.email}</td>
                            <td>{x.mobno}</td>
                            <td>{x.salary}</td>
                            <td><button onClick={() => openPopup(x)}>Edit</button>
                            
                                <button onClick={() => handleDelete(x.id)}>Delete</button>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
            {isPopup &&
                <div className='update-popup'>
                    <button onClick={() => setIsPopup(false)}>X</button>
                    <div className='form-1'>
                        <form onSubmit={handleUpdate}>
                            <h1>Update Employee Details</h1><br />
                            <label>Employee Name</label><br />
                            <input type='text' value={name1} onChange={(e) => { setName1(e.target.value) }} /><br /><br />
                            <label>Employee Age</label><br />
                            <input type='number' value={age1} onChange={(e) => { setAge1(e.target.value) }} /><br /><br />
                            <label>Employee Email</label><br />
                            <input type='email' value={email1} onChange={(e) => { setEmail1(e.target.value) }} /><br /><br />
                            <label>Employee Mobile No.</label><br />
                            <input type='number' value={mobno1} onChange={(e) => { setMobNo1(e.target.value) }} /><br /><br />
                            <label>Salary</label><br />
                            <input type='number' value={salary1} onChange={(e) => { setSalary1(e.target.value) }} /><br /><br />
                            <button type='submit'>Update</button>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}
