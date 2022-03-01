import React from 'react';


import HeaderCompound from '../../compounds/HeaderCompound';
import Footer from '../footer/index';
import OptFormWrapper from '../../compounds/OptFormCompound';
import Seperator from '../Seperator/Seperator';
import JumboCompound from '../../compounds/JumboCompound';
import AccordionCompound from '../../compounds/AccordionCompound';
import OptFormCompound from '../../compounds/OptFormCompound';

const MainLayout = ({children}) =>{
    return(
        <> 
        <header>
           
        </header>

        <main>
            <HeaderCompound>
                <OptFormWrapper/>
            </HeaderCompound>
            <Seperator/>
            <JumboCompound />
      <AccordionCompound />
      <OptFormCompound />
      <Seperator />
            {children}
        </main>
        <footer>      
            <Footer/>
        </footer>

        </>
    )
}
export default MainLayout