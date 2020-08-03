import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        height: 125,
        backgroundColor: theme.palette.secondary.main,
    },
}));

export const Card = () => {
    const classes = useStyles();
    return (
        <div className={classes.card}>
            <Typography component="h1" variant="h3">
                Hello World!
            </Typography>
        </div>
    );
};
