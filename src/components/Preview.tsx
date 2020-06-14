import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Alert from '@material-ui/lab/Alert';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

interface Props {
    exportData: string[][];
}

const useStyles = makeStyles(() =>
    createStyles({
        alert: {
            width: 'fit-content',
        },
    }),
);

function Preview({ exportData }: Props) {
    const classes = useStyles();

    if (exportData.length === 0) {
        return (
            <Alert severity="info" className={classes.alert}>
                Select a schema and upload a CSV of transactions.
            </Alert>
        );
    }

    const headerRow = exportData.shift();

    return (
        <TableContainer component={Paper}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        {headerRow?.map((data: string) => (
                            <TableCell>{data}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {exportData?.map((row) => (
                        <TableRow>
                            {row?.map((data) => (
                                <TableCell>{data}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export { Preview };
