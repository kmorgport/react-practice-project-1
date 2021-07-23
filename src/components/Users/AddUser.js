import React, {useState} from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal'
// import Wrapper from '../Helpers/Wrapper'

const AddUser = props =>{
    const [enteredUserName, setUsername] = useState('');
    const [enteredAge, setAge] = useState('');
    const [error, setError] = useState();


    const addUserHandler = event =>{
        event.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid Input',
                alert: 'Please enter a valid name and age (non-empty)'
            })
            return
        }
        if(+enteredAge < 1) {
            setError({
                title: 'Invalid Input',
                alert: 'Please enter an age greater than 0'
            })
            return
        }
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

    const errorHandler = ()=>{
        setError(null);
    }

    return (
        <React.Fragment>
        {error && <ErrorModal title={error.title} alert={error.alert} resetError={errorHandler}/>}
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
        </React.Fragment>
    )
}

export default AddUser