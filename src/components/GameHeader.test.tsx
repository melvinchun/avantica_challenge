import React from 'react';
import { screen, render } from '@testing-library/react'
import { AppProvider } from '../context/context';
import GameHeader from './GameHeader';

it('Display Header', () => {
    render(
        <AppProvider testState={{
            user: 'Melvin',
            timer: 10
        }}>
            <GameHeader />
        </AppProvider>
    );
    screen.getByText('Good Luck, Melvin!');
    screen.getByText('Your Score: 10 seconds');
});