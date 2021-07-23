import React from 'react';
import Card from './Card';
import Button from './Button'
import classes from './Error.module.css'
import ReactDOM from 'react-dom'

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.resetError}/>
}

const ModalOverlay = props => {
    return (
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
    )
}

const ErrorModal = (props) =>{
    return (
        // uses portal to help accessibility as it wont crowd the DOM when rendered 
        <React.Fragment>
        {ReactDOM.createPortal(<Backdrop resetError={props.resetError}/>,document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<ModalOverlay 
        title={props.title}
        message={props.message}
        resetError={props.resetError} 
        />,
        document.getElementById('overlay-root')
        )}
        </React.Fragment>
    )
}
export default ErrorModal