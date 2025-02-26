"use client"
import LayoutSection from '@/components/layout/LayoutSections';
import {FC, ReactNode} from 'react';

interface LayoutProps{
    children: ReactNode
}

const layout: FC <LayoutProps>= ({children}) => { 
return (
    <LayoutSection>
        <main>{children}</main>
    </LayoutSection>
)


};


export default layout