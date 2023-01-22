import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

export const App: FC<any> = () => {
    return (
        <Provider store={store}>
            <div>This is the app!</div>
        </Provider>

    )
}