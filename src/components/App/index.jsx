import React from 'react';
import { Layout } from '../../containers/Layout';
import { Login } from '../../containers/Login';
import './global.css'
import './App.scss'

const App = () => {
    return (
        <Layout>
            <Login />
        </Layout>
    );
};

export default App;