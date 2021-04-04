import React, { useEffect, useState } from 'react';
import League from '../League/League';
import Banner from '../../images/front-img.svg'

const Home = () => {
    const [leagues, setLeagues] = useState([]); 
    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php"; 
        fetch(url)
        .then(res => res.json())        
        .then(data => setLeagues(data.leagues))
    }, [])
    const background = {
        padding: "100px 0",
        backgroundImage: `url(${Banner})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
    }
    const colorBg = {
        backgroundColor: "#0E0A2A"
    }

    return (
        <div style={colorBg}>
            
            <h1 style={background} className="text-center text-white">Sport's Mania</h1>
            
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        leagues.map(league => <League league={league} key={league.idLeague}></League> )
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;
