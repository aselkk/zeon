import React from 'react';
import Carouselka from '../Components/Carouselka'
import Advantages from '../Components/Advantages'
import Trending from '../Components/Trending'
import Arrivals from '../Components/Arrivals';
import CollectionComponents from '../Components/CollectionComponents';
import FAB from '../Components/FAB'

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