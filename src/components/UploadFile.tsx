import React, { FormEvent } from 'react';
// @ts-ignore
import Files from 'react-files';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

interface Props {
    enabled: boolean;
    onFileUpload: Function;
}

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
    }),
);

function UploadFile({ enabled, onFileUpload }: Props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Files
                onChange={(files: FormEvent) => onFileUpload(files)}
                onError={(error: Error) => console.error(error)}
                accepts={['.csv']}
                maxFileSize={10000000}
                minFileSize={0}
                clickable={enabled}
            >
                <Button variant="contained" component="span" disabled={!enabled}>
                    Upload CSV
                </Button>
            </Files>
        </div>
    );
}

export { UploadFile };
