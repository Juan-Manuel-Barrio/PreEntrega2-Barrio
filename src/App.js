import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';


const App = () => {
    return (
        <BrowserRouter>
            <NavBar />

            <Routes>
                <Route path='/' element={ <ItemListContainer  />} />
                <Route path='/category/:categoryId' element={ <ItemListContainer  />} />
                <Route path='/detalle/:productId' element={ <ItemDetailContainer  />} />
            </Routes>
        
        </BrowserRouter>
    )
};

export default App;