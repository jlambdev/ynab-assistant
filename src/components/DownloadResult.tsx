import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(2),
            padding: theme.spacing(2),
            textTransform: 'none',
        },
    }),
);

function DownloadResult() {
    const classes = useStyles();

    return (
        <Button variant="contained" className={classes.button}>
            Download CSV
        </Button>
    );
}

export { DownloadResult };
