import { h } from 'preact';
import Layout from './../layout/Layout.tsx'

import './global.styles.css';

const MyApp = ({ Component, props }) => {
    return (
        <Layout>
            <Component {...props} />
        </Layout>
    );
};

export default MyApp;