import React from 'react';
import './Contact.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

const Contact = ( { NavigateToHome, render } ) => {

    var display = render === 'contact' ? true : false;

    return(
        <Dialog
            fullWidth={true}
            maxWidth={"lg"}
            open={display}
            >
            <DialogContent>
            <main className="pa4 black-80">
                <form className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f3 blue fw6 ph0 mh0">Any idea? Contact me</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" >Full name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-black w-100" type="email" name="email-address"  id="email-address" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" >Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-black w-100" type="email" name="email-address"  id="email-address" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6">How can i help you ?</label>
                        <textarea className="pa2 input-reset ba b--black bg-transparent hover-black w-100" aria-describedby="comment-desc"></textarea>
                    </div>
                    </fieldset>
                    <div className="mt3">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Submit" />
                    </div>
                </form>
            </main>
            </DialogContent>
            <DialogActions>
                <Button onClick={NavigateToHome} color="primary">
                Exit
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Contact;