import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Collection from './Pages/Collection';
import News from './Pages/News';
import Footer from './Components/Footer';
import {Routes, Route} from 'react-router-dom'
import './index.css';
import Help from './Pages/Help';
import Cart from './Pages/Cart';
import Favorites from './Pages/Favorites';
import SearchPage from './Pages/SearchPage'
import CollectionsList from './Pages/Collections/CollectionsList'
import CollectionItem from './Pages/Collections/CollectionItem'
import Product from './Pages/Collections/Product'
import {useState} from 'react'

function App() {
  const [searchResult, setSearchResult] = useState([])

  const [searchValue, setSearchValue] = useState('')

  const handleChange = (value) => {
    setSearchValue(value)
    // console.log(searchValue);
  }

  return (
    <div className="app">
        <Navbar searchValue={searchValue} setSearchValue={handleChange} setSearchResult={setSearchResult} searchResult={searchResult}/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/about' element={<About/>}/>
                <Route exact path='/collection' element={<Collection/>}/>
                <Route exact path='/news' element={<News/>}/>
                <Route exact path='/help' element={<Help/>}/>
                <Route exact path='/cart' element={<Cart/>}/>
                <Route exact path='/favorites' element={<Favorites/>}/>
                <Route exact path='/search' element={<SearchPage searchValue={searchValue} searchResult={searchResult}/>}/>
                <Route exact path='/collection/' element={<CollectionsList/>}/>
                <Route exact path='/collection/:id' element={<CollectionItem/>}/>
                <Route exact path='/collection/:id/product/:product' element={<Product/>}/>
            </Routes>
        <Footer style={{marginTop:'auto'}}/>
    </div>
  );
}

export default App;
