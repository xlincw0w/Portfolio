import React from 'react';
import './Projects.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const Projects = ( { NavigateToHome, render } ) => {

    var display = render === 'projects' ? true : false;

    return(
        <Dialog
            fullWidth={true}
            maxWidth={"lg"}
            open={display}
            >
            <DialogTitle id="alert-dialog-title">{<p className="blue f3">My Projects :</p>}</DialogTitle>
            <DialogContent>
            <div className="pa4">
                <blockquote className="athelas ml0 mt0 pl4 black-90 bl bw2 b--blue">
                <div className="">
                    <h3 className="f5 f4-m f3-l">Openclassroom Project 'Apprenez a programmer en python'</h3>
                    <p className="f5 f4-m f4-l lh-copy measure mt0"> => https://github.com/xlincw0w/Roboc</p>
                </div>
                <div className="">
                    <h3 className="f5 f4-m f3-l">T-Agency Front-End</h3>
                    <p className="f5 f4-m f4-l lh-copy measure mt0"> => https://github.com/xlincw0w/T-Agency-frontend-reactjs</p>
                </div>
                <div className="">
                    <h3 className="f5 f4-m f3-l">T-Agency Back-End</h3>
                    <p className="f5 f4-m f4-l lh-copy measure mt0"> => https://github.com/xlincw0w/T-Agency-backend-nodejs</p>
                </div>
                </blockquote>
            </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={NavigateToHome} color="primary">
                Exit
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Projects;