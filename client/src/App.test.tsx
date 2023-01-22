import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { App } from './app';

describe('App', () => {
    it('should render', () => {
        const screen = render(
            <App />
        );
        
        expect(screen.getByText(/This is the app!/i)).toBeInTheDocument();
    })
})