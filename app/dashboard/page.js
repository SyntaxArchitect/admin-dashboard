'use client'

import Dashboard from '../components/Dashboard';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const Page = () => {

    return (
        <Provider store={store}>
            <Dashboard />
        </Provider>
    );
};

export default Page;
