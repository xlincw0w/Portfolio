import React from 'react';
import './About.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const About = ( { NavigateToHome, render } ) => {

    var display = render === 'about' ? true : false;

    return(
        <Dialog
            open={display}
            onClose={() => {console.log("canceled")}}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending anonymous location data to
                Google, even when no apps are running.
                Google, even when no apps are running.
                Google, even when no apps are running.
                Google, even when no apps are running.
                Google, even when no apps are running.
                Google, even when no apps are running.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={NavigateToHome} color="primary">
                exit
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default About;