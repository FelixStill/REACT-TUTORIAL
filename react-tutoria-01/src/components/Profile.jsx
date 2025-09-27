import { useState } from "react"

const Profile = () =>{
    const [profile,setProfile] = useState({
        name:'',
        age:''
    })
    const handleChange = (e) =>{
        const {name,value} = e.target
        setProfile((prevProfile) =>({
            ...prevProfile,
            [name]:value
        }));
    }
    return (
        <div>
            <div>
                <h3>Profile:</h3>
                <label>
                    Name:
                    <input type="text" name="name" value={profile.name} onChange={handleChange}/>
                </label>
                <label>
                    Age:
                    <input type="number" name="age" value={profile.age} onChange={handleChange} />
                </label>
            </div>
            <div>
                <h2>Profile Information:</h2>
                <div>Name:{profile.name}</div>
                <div>Age:{profile.age}</div>
            </div>
        </div>
    )
}

export default Profile