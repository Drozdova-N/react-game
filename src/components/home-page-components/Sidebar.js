import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { blue } from '@material-ui/core/colors';
const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: blue[500],
    },
}));

export default function Sidebar(props) {
    const classes = useStyles();
    let player = {
        nickname:"Dina Drozdova",
        rating : 32,
    };

    let stateGame={
        playersOnServer:100,
    }

    const [user, setUser] = React.useState(player);
    const [state, setState] = React.useState(stateGame);

    let initialLetter = user.nickname.toString().charAt(0).toLocaleUpperCase();


    return(
        <div className="container-card">
            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {initialLetter}
                        </Avatar>
                    }
                    title={user.nickname}
                    subheader=""
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Rating: {user.rating}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Players on the server: {stateGame.playersOnServer}
                    </Typography>
                </CardContent>
            </Card>
        </div>

    );

}