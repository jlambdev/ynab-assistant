import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { Controls } from './Controls';
import { Preview } from './Preview';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(2),
            },
        },
    }),
);

function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Controls />
            <Preview />
        </div>
    );
}

export { App };
