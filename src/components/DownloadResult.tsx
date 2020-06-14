import React from 'react';
import { CSVLink } from 'react-csv';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

interface Props {
    schema: string;
    enabled: boolean;
    exportData: string[][];
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        link: {
            textDecoration: 'none',
        },
        button: {
            margin: theme.spacing(2),
        },
    }),
);

function DownloadResult({ schema, enabled, exportData }: Props) {
    const classes = useStyles();

    return (
        <CSVLink data={exportData} separator={','} filename={`${schema}_import`} className={classes.link}>
            <Button variant="contained" className={classes.button} disabled={!enabled}>
                Download CSV
            </Button>
        </CSVLink>
    );
}

export { DownloadResult };
