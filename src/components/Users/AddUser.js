import React, {useState, useRef} from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal'
// import Wrapper from '../Helpers/Wrapper'

const AddUser = props =>{

    //useRef always creates an object with a 'current' field
    //an *actual* DOM node is being kept in the current field
    //DO NOT MANIPULATE DOM NODE, that is for React ONLY
    const nameInputRef = useRef();
    const ageInputRef = useRef();


    //<--- When to use State vs Ref? --->
    //<<  If you want to just read a value, Ref are likely better >>
    // const [enteredUserName, setUsername] = useState('');
    // const [enteredAge, setAge] = useState('');
    const [error, setError] = useState();


    const addUserHandler = event =>{
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredRefAge = ageInputRef.current.value;
        if(enteredName.trim().length === 0 || enteredRefAge.trim().length === 0){
            setError({
                title: 'Invalid Input',
                alert: 'Please enter a valid name and age (non-empty)'
            })
            return
        }
        if(+enteredRefAge < 1) {
            setError({
                title: 'Invalid Input',
                alert: 'Please enter an age greater than 0'
            })
            return
        }
        const User = {
            key: Math.random().toString(),
            name: enteredName,
            age: enteredRefAge
        }
        props.onAddUsersList(User)
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        // setUsername("")
        // setAge("")
    }

    // const usernameChangeHandler = event =>{
    //     setUsername(event.target.value);

    // }

    // const ageChangeHandler = event => {
    //     setAge(event.target.value);
    // }

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
            <input 
            id="username" 
            // value={enteredUserName} 
            type="text" 
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
            />
            </div>
            <div>
            <label htmlFor="age">Age</label>
            <input 
            id="age" 
            type="number" 
            // value={enteredAge} 
            // onChange={ageChangeHandler}
            ref={ageInputRef}
            />
            </div>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </React.Fragment>
    )
}

export default AddUser