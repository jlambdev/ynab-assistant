import React, { useState, ChangeEvent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            minWidth: 120,
        },
    }),
);

// TODO: push state up so flow can be triggered, consider using React context to avoid prop drilling
// TODO: dynamic loading of schemas
function SelectSchema() {
    const classes = useStyles();
    const [schema, setSchema] = useState('');

    const handleSchemaChange = (event: ChangeEvent<{ value: unknown }>) => {
        setSchema(event.target.value as string);
    };

    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="schema-selection-label">Schema</InputLabel>
            <Select
                labelId="schema-selection-label"
                id="schema-selection"
                value={schema}
                label="Schema"
                onChange={handleSchemaChange}
            >
                <MenuItem value="n26">N26</MenuItem>
                <MenuItem value="lloyds">Lloyds</MenuItem>
            </Select>
        </FormControl>
    );
}

export { SelectSchema };
