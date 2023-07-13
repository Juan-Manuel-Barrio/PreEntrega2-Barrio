import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
return (
    <BrowserRouter>
        <NavBar />

        <Routes>
            <Route path='/' element={ <ItemListContainer  />} />
            <Route path='/category/:categoryId' element={ <ItemListContainer  />} />
            
        </Routes>
    
    </BrowserRouter>
    )
};

export default App;