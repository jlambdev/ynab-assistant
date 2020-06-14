import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { SelectSchema } from './SelectSchema';
import { UploadFile } from './UploadFile';
import { DownloadResult } from './DownloadResult';

interface Props {
    schema: string;
    exportData: string[][];
    onSchemaChange: Function;
    onFileUpload: Function;
}

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

function Controls({ schema, exportData, onSchemaChange, onFileUpload }: Props) {
    const classes = useStyles();

    const enableUpload = !!schema;
    const enableDownload = exportData.length > 0;

    return (
        <Paper elevation={3} className={classes.paper}>
            <SelectSchema schema={schema} onSchemaChange={onSchemaChange} />
            <UploadFile enabled={enableUpload} onFileUpload={onFileUpload} />
            <DownloadResult enabled={enableDownload} schema={schema} exportData={exportData} />
        </Paper>
    );
}

export { Controls };
