import React from 'react';
import TopBar from './TopBar';

const Layout = ({children}) => {
    return (
        <React.Fragment>
            <TopBar/>
            {children}
        </React.Fragment>
    )
};

export default Layout;