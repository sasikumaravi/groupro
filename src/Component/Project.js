import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function ProjectDetails() {
    const [id1, setId1] = useState('')
    const [list, setList] = useState([])
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState('')
    const [advance, setAdvance] = useState('')
    const [budget, setBudget] = useState('')
    const [isPopup, setIsPopup] = useState(false)
    const [name1, setName1] = useState('')
    const [description1, setDescription1] = useState('')
    const [duration1, setDuration1] = useState('')
    const [advance1, setAdvance1] = useState('')
    const [budget1, setBudget1] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3002/project', { name, description, duration, budget, advance })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        axios.get('http://localhost:3002/project')
            .then(res => setList(res.data))
            .catch(err => console.log(err))
    })

    const openPopup = (data) => {
        setIsPopup(true)
        setId1(data.id)
        setName1(data.name)
        setDescription1(data.description)
        setDuration1(data.duration)
        setAdvance1(data.advance)
        setBudget1(data.budget)
    }

    const handleUpdate = () => {
        axios.put(`http://localhost:3002/project/${id1}`, {
            name: name1, description: description1, duration: duration1, advance: advance1,
            budget: budget1
        })
            .then(res => setList(res.data))
            .catch(err => console.log(err))
    }
    const handleDelete = (id) => {
        axios.delete(`http://localhost:3002/project/${id}`)
            .then(res => {
                console.log(res)
                alert('Deleted Successfully')
            })
            .catch(err => { console.log(err) })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Enter Project Details</h1>
                <label>Name</label><br/>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} /><br/><br/>
                <label>Description</label><br/>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} /><br/><br/>
                <label>Project Duration</label><br/>
                <input type='number' value={duration} onChange={(e) => setDuration(e.target.value)} /><br/><br/>
                <label>Budget</label><br/>
                <input type='number' value={budget} onChange={(e) => setBudget(e.target.value)} /><br/><br/>
                <label>Advance</label><br/>
                <input type='number' value={advance} onChange={(e) => setAdvance(e.target.value)} /><br/><br/>
                <button type='submit'>Add Project</button>
            </form>

            <table className='table1'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Project Duration</th>
                        <th>Budget</th>
                        <th>Advance</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(x => (
                        <tr key={x.name}>
                            <td>{x.name}</td>
                            <td>{x.description}</td>
                            <td>{x.duration}</td>
                            <td>{x.budget}</td>
                            <td>{x.advance}</td>
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
                            <h1>Update Project Details</h1><br />
                            <label>Name</label><br/>
                            <input type='text' value={name1} onChange={(e) => setName1(e.target.value)} /><br/><br/>
                            <label>Description</label><br/>
                            <textarea value={description1} onChange={(e) => setDescription1(e.target.value)} /><br/><br/>
                            <label>Project Duration</label><br/>
                            <input type='number' value={duration1} onChange={(e) => setDuration1(e.target.value)} /><br/><br/>
                            <label>Budget</label><br/>
                            <input type='number' value={budget1} onChange={(e) => setBudget1(e.target.value)} /><br/><br/>
                            <label>Advance</label><br/>
                            <input type='number' value={advance1} onChange={(e) => setAdvance1(e.target.value)} /><br/><br/>
                            <button type='submit'>Add Project</button>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}