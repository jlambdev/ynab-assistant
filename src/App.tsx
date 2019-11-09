import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from './styled';
import { YNAB_DATA } from './redux/actionTypes';

export default function App(): JSX.Element {
    const dispatch = useDispatch();

    const getYnabData = (): void => {
        dispatch({ type: YNAB_DATA });
    };

    return <Button onClick={getYnabData}>Fetch YNAB Data</Button>;
}
