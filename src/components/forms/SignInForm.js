import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import '../home-page-components/css/head.css';
import Card from '@material-ui/core/Card';
const useStyles = makeStyles(theme => ({
    paper: {
        marginLeft: theme.spacing(75),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    card: {
        minWidth: 260,
        padding:'1em'
    },
}));

export default function SignInForm() {
    const classes = useStyles();

    return (
        <Container  maxWidth="xs" >
            <div className={classes.paper}>
                    <h5 className="neon"> Sign in</h5>
                <Card className={classes.card}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="nickname"
                        label="Nackname"
                        name="nickname"
                        autoComplete="email"
                        autoFocus
                        color="primary"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        color="primary"
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}>
                        Sign In
                    </Button></Card>
            </div>
        </Container>
    );
}
