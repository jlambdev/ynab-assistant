import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { SelectSchema } from './SelectSchema';
import { UploadFile } from './UploadFile';
import { DownloadResult } from './DownloadResult';

const useStyles = makeStyles(() =>
    createStyles({
        paper: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: 'fit-content',
        },
    }),
);

function Controls() {
    const classes = useStyles();

    return (
        <Paper elevation={3} className={classes.paper}>
            <SelectSchema />
            <UploadFile />
            <DownloadResult />
        </Paper>
    );
}

export { Controls };
