import { Router, Route, Switch } from 'react-router-dom';
import { screen, render } from '@testing-library/react'
import Home from './Home';
import userEvent from '@testing-library/user-event';

import { createBrowserHistory } from 'history';

it('Submit Username', () => {
    const history = createBrowserHistory();

    render(
        <Router history={history}>
            <Switch>
                <Route  exact path='/' component={Home} history={history} />
            </Switch>
        </Router>
    );

    const inputName = screen.getByPlaceholderText('Your name here');
    userEvent.type(inputName, 'Melvin Portillo');

    const submitButton = screen.getByRole('button');
    userEvent.click(submitButton);

    expect(history.location.pathname).toBe('/game');
});