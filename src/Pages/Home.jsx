import React from 'react';
import Carouselka from '../Components/Carouselka'
import Advantages from '../Components/Advantages'
import Trending from '../Components/Trending'
import Arrivals from '../Components/Arrivals';
import CollectionsList from './Collections/CollectionsList';
import CollectionComponents from '../Components/CollectionComponents';

const Home = () => {
    return (
        <div style={{background: '#ECECEC'}}>
            <Carouselka/>
            <Trending/>
            <Arrivals/>
            <CollectionComponents/>
            <Advantages/>
        </div>
    );
};

export default Home;