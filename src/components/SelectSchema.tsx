import React, { ChangeEvent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

interface Props {
    schema: string;
    onSchemaChange: Function;
}

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

function SelectSchema({ schema, onSchemaChange }: Props) {
    const classes = useStyles();

    const handleSchemaChange = (event: ChangeEvent<{ value: unknown }>) => {
        onSchemaChange(event.target.value as string);
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
                <MenuItem value="monzo">Monzo</MenuItem>
                <MenuItem value="transferwise">Transferwise</MenuItem>
                <MenuItem value="revolut">Revolut</MenuItem>
                <MenuItem value="dkb">DKB</MenuItem>
            </Select>
        </FormControl>
    );
}

export { SelectSchema };
