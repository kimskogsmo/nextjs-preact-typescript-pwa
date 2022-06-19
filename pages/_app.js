import { h } from 'preact';
import Layout from './../layout/Layout.tsx'

import './reset.css';
import './vars.css';
import './main.css';

const MyApp = ({ Component, props }) => {
    return (
        <Layout>
            <Component {...props} />
        </Layout>
    );
};

export default MyApp;