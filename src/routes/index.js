import React from 'react';
import { ContextProvider } from '../common/context/context';
import { Switch, Route } from 'react-router-dom';
import { Registration } from '../views/registration';
import { Home } from '../views/home';
import { Sells } from '../views/sells';
import { Accompaniment } from '../views/accompaniment';

export const Routes = () => {
    return (
        <Switch>
            <ContextProvider>
                <Route component={Home} path='/' exact />
                <Route component={Registration} path='/registration' />
                <Route component={Sells} path='/sells' />
                <Route component={Accompaniment} path='/accompaniment' />
            </ContextProvider>
        </Switch>
    )
}