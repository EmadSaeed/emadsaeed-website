import "./contact.css"
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Paper, TextField, Grid, Button, Alert, Stack } from '@mui/material';
import Particles from 'react-particles-js';
import SendIcon from '@mui/icons-material/Send';
function Contact() {
    const emptyForm = { organisation: "", name: "", email: "", subject: "", message: "" };
    const [formData, setFormData] = useState(emptyForm);
    const [errors, setErrors] = useState({});
    const [successAlertDisplay, setSuccessAlertDisplay] = useState(true);
    const [errorAlertDisplay, setErrorAlertDisplay] = useState(true);

    console.log("formData", formData);
    const validate = () => {
        let errorMessage = {};
        errorMessage.name = formData.name ? "" : "This field is required"
        errorMessage.email = formData.email && (/$^|.+@.+..+/).test(formData.email) ? "" : "Email is not valid"
        errorMessage.subject = formData.subject ? "" : "This field is required."
        errorMessage.message = formData.message ? "" : "This field is required."

        setErrors({
            ...errorMessage
        })
        return Object.values(errorMessage).every(x => x === "")
    }

    const sendEmail = (e) => {
        e.preventDefault();

        if (validate()) {
            emailjs.sendForm('service_ffha22h', 'template_6vrqko1', e.target, 'user_UmCnxjrcVmtVHD4Gbf63X')
                .then((result) => {
                    console.log(result.text);
                    setSuccessAlertDisplay(false);
                }, (error) => {
                    console.log(error.text);
                    setErrorAlertDisplay(false);
                }).then(setFormData(emptyForm));
        }
    }

    return (
        <div className="contact" id="contact">
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="success" style={{ display: successAlertDisplay ? 'none' : 'block' }}>Thank you for contacting me. I will come back to you soon!</Alert>
                <Alert severity="error" style={{ display: errorAlertDisplay ? 'none' : 'block' }}>There is an error with submitting the form!</Alert>
            </Stack>
            <h1 className="contactMe">Contact me </h1>
            <h3 className="contactParagraph">For any inquiries.
                Please, don't hesitate to use the form below.
                <br /><br />Alternatively, please, drop me an email at
            </h3>
            <a href="mailto:hello@emadsaeed.com" className="hello_1">hello@emadsaeed.com</a>

            <div className="formContainer">
                <Grid container spacing={2} alignItems="center" justifyContent="center" mt={2}>
                    <Grid item xs={10} md={8} lg={6}>
                        <Paper elevation={12} >
                            <form className="contactForm" noValidate autoComplete="off" onSubmit={sendEmail}>
                                <TextField
                                    autoComplete="new"
                                    variant="outlined"
                                    label="Organisation"
                                    name="organisation"
                                    value={formData.organisation}
                                    onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                                    inputProps={{
                                        maxLength: 100
                                    }}
                                />
                                <TextField required
                                    autoComplete="new"
                                    variant="outlined"
                                    label="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    error={errors.name ? true : false}
                                    helperText={errors.name}
                                    inputProps={{
                                        maxLength: 100
                                    }}
                                />
                                <TextField required
                                    autoComplete="new"
                                    variant="outlined"
                                    label="E-mail"
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    error={errors.email ? true : false}
                                    helperText={errors.email}
                                    inputProps={{
                                        maxLength: 100
                                    }}
                                />
                                <TextField required
                                    autoComplete="new"
                                    variant="outlined"
                                    label="Subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    error={errors.subject ? true : false}
                                    helperText={errors.subject}
                                    inputProps={{
                                        maxLength: 100
                                    }}
                                />
                                <TextField required
                                    autoComplete="new"
                                    id="outlined-multiline-flexible"
                                    multiline
                                    rows={4}
                                    label="Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    error={errors.message ? true : false}
                                    helperText={errors.message}
                                    inputProps={{
                                        maxLength: 100
                                    }}
                                />
                                <Button type="submit" variant="contained" className="contactSubmitButton">SEND <SendIcon /></Button>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <Particles className="contactParticles" />
        </div>
    )
}

export default Contact
