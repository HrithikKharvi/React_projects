import { Link } from 'react-router-dom';
import React from 'react';

const Home = () => {
    return <div>
        Home Page
        <Link to="/products">Click to goto Products page</Link>

        <hr />
        <Link to="/samplePage">Click to SamplePage</Link>
    </div>
}

export default Home;
