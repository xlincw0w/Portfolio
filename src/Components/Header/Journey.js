import React from 'react';
import './Journey.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const Journey = ( { NavigateToHome, render } ) => {

    var display = render === 'journey' ? true : false;

    return(
        <Dialog
            fullWidth={true}
            maxWidth={"lg"}
            open={display}
            >
            <DialogTitle id="alert-dialog-title">{<p className="blue">Interessted in my study Journey ? Here it is :</p>}</DialogTitle>
            <DialogContent >
            <div className="pa4">
                <blockquote className="athelas ml0 mt0 pl4 black-90 bl bw2 b--blue">
                <div className="">
                    <h3 className="f5 f4-m f3-l">Baccalaureate in mathematics field 2016</h3>
                    <p className="f5 f4-m f4-l lh-copy measure mt0"> => Colonel Amirouche High school</p>
                </div>
                <div className="">
                    <h3 className="f5 f4-m f3-l">1st year Computer science and mathematics 2017</h3>
                    <p className="f5 f4-m f4-l lh-copy measure mt0"> => Mouloud Mammeri University Tizi-Ouzou 2017</p>
                </div>
                <div className="">
                    <h3 className="f5 f4-m f3-l">2nd year Computer science 2017</h3>
                    <p className="f5 f4-m f4-l lh-copy measure mt0"> => Mouloud Mammeri University Tizi-Ouzou 2017</p>
                </div>
                <div className="">
                    <h3 className="f5 f4-m f3-l">3nd year Computer science 2017</h3>
                    <p className="f5 f4-m f4-l lh-copy measure mt0"> => Mouloud Mammeri University Tizi-Ouzou 2017</p>
                </div>
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

export default Journey;