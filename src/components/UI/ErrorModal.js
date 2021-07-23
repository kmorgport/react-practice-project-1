import React from 'react';
import Card from './Card';
import Button from './Button'
import classes from './ErrorModal.module.css'
const ErrorModal = (props) =>{
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div classes={classes.content}>
                <p>{props.alert}</p>
            </div>
            <footer className={classes.actions}>
                <Button>Okay</Button>
            </footer>
        </Card>
    )
}