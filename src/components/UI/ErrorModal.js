import React from 'react';
import Card from './Card';
import Button from './Button'
import classes from './Error.module.css'
const ErrorModal = (props) =>{
    return (
        <div>
        <div className={classes.backdrop} onClick={props.resetError}/>
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div classes={classes.content}>
                <p>{props.alert}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.resetError}>Okay</Button>
            </footer>
        </Card>
        </div>
    )
}
export default ErrorModal