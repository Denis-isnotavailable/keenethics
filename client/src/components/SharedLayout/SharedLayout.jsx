import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './SharedLayout.css';

const SharedLayout = ({children}) => {
    return (
        <div>
            <Header />

            <main className="container">
                {children}
            </main>            

            <Footer />
        </div>
    );
}

export default SharedLayout