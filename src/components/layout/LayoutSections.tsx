"use client"
import {FC, ReactNode} from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

interface iLayout{
    children: ReactNode;
}
const LayoutSection: FC<iLayout> = ({children}) => { 
return (
    <div className="">
        <header>
            <Header/>
        </header>
        {children}
        <footer>
            <Footer/>
        </footer>
    </div>
)


};


export default LayoutSection