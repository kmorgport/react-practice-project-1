import React, {useState} from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'

const AddUser = props =>{
    const [enteredUserName, setUsername] = useState('');
    const [enteredAge, setAge] = useState('');


    const addUserHandler = event =>{
        event.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
            return
        }
        if(+enteredAge < 1) return
        const User = {
            key: Math.random().toString(),
            name: enteredUserName,
            age: enteredAge
        }
        props.onAddUsersList(User)
        setUsername("")
        setAge("")
    }

    const usernameChangeHandler = event =>{
        setUsername(event.target.value);

    }

    const ageChangeHandler = event => {
        setAge(event.target.value);
    }

    return (
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <div>
            <label htmlFor="username">Username</label>
            <input id="username" value={enteredUserName} type="text" onChange={usernameChangeHandler}/>
            </div>
            <div>
            <label htmlFor="age">Age</label>
            <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
            </div>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
    )
}

export default AddUser