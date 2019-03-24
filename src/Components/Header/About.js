import React from 'react';
import './About.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const About = ( { NavigateToHome, render } ) => {

    var display = render === 'about' ? true : false;

    return(
        <Dialog
            fullWidth={true}
            maxWidth={"lg"}
            open={display}
            >
            <DialogTitle id="alert-dialog-title">{<p className="blue">Here is the exciting part, ABOUT ME !</p>}</DialogTitle>
            <DialogContent>
            <div className="pa4">
                <blockquote className="athelas ml0 mt0 pl4 black-90 bl bw2 b--blue">
                    <p className="f5 f4-m f3-l lh-copy measure mt0">
                    Discipline in typography is a prime virtue. Individuality
                    must be secured by means that are rational. Distinction
                    needs to be won by simplicity and restraint. It is equally
                    true that these qualities need to be infused wiht a
                    certain spirit and vitality, or they degenerate into
                    dullness and mediocrity.
                    </p>
                </blockquote>
            </div>
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