import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        input: {
            display: 'none',
        },
        button: {
            padding: theme.spacing(2),
            textTransform: 'none',
        },
    }),
);

// TODO: disable button and input if nothing has been uploaded
// TODO: consider using 'react-files' import for DnD, clean management, onError handling
function UploadFile() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <input accept=".csv" className={classes.input} id="upload-csv-button" type="file" />
            <label htmlFor="upload-csv-button">
                <Button variant="contained" component="span" className={classes.button}>
                    Upload CSV
                </Button>
            </label>
        </div>
    );
}

export { UploadFile };
