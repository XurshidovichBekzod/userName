import React, { useState } from 'react';
import './header.css';
import img from "../../assets/user.jpg"

const Header = () => {
    const [title, setTitle] = useState("");
    const [job, setJob] = useState("");
    const [age, setAge] = useState("");
    const [data, setData] = useState([]);

    const handleCreate = () => {
        const user = {
            title,
            job,
            age,
            id: new Date().getTime()
        };

        setData([...data, user]);
        setTitle("");
        setJob("");
        setAge("");
    };

    return (
        <div>
            <form className="formContainer" onSubmit={(e) => e.preventDefault()}>
                <h2 className="text-center">User Information</h2>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="input" placeholder="Name" required />
                <input type="text" value={job} onChange={(e) => setJob(e.target.value)} className="input" placeholder="Profession" required/>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="input" placeholder="Age" required/>

                <button type="submit" onClick={handleCreate} className="btn">Create</button>
            </form>

            <div className="cards-container">
                {data.map((item) => (
                    <div key={item.id} className="card">
                        <div className="avatar"></div>
                        <img className='image' src={img} alt="" />
                        <h3 className="text-name">{item.title}</h3>
                        <p className="card-job">{item.job}</p>
                        <p className="card-age">{item.age} years old</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Header;
