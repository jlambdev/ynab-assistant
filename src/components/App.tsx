import React, { useState } from 'react';
// @ts-ignore
import * as CSV from 'csv-string/';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { Controls } from './Controls';
import { Preview } from './Preview';
import { convert } from '../utils/convert';
import { SCHEMAS } from '../utils/constants';

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
    const [schema, setSchema] = useState<string>('');
    const [exportData, setExportData] = useState<string[][]>([]);

    const onSchemaChange = (schema: string) => {
        setExportData([]);
        setSchema(schema);
    };

    const onFileUpload = async (files: File[]) => {
        if (!schema || files.length === 0) {
            throw new Error('Invalid operation, missing schema or files');
        }
        const reader = new FileReader();
        reader.readAsText(files[files.length - 1]);
        reader.addEventListener('loadend', () => {
            const convertedRows = convert(CSV.parse(reader.result), SCHEMAS[schema as keyof typeof SCHEMAS]);
            setExportData(convertedRows);
        });
    };

    return (
        <div className={classes.root}>
            <Controls
                schema={schema}
                exportData={exportData}
                onSchemaChange={onSchemaChange}
                onFileUpload={onFileUpload}
            />
            <Preview exportData={exportData} />
        </div>
    );
}

export { App };
