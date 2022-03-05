
import { h } from 'preact';
import Layout from './../layout/Layout'

import './global.styles.css';

const MyApp = ({ Component, props }) => {
    return (
        <Layout>
            <Component {...props} />
        </Layout>
    );
};

export default MyApp;