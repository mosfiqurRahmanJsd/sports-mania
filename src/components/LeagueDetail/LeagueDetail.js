import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const LeagueDetail = () => {
    const { id } = useParams();
    const [leagueDetail, setLeagueDetail] = useState({}); 
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagueDetail(data.leagues[0]))
    }, []) 

    const { strLogo, strLeague, dateFirstEvent, strCountry, strSport, strGender, strDescriptionEN, strDescriptionFR, strTwitter, strFacebook, strRSS  } = leagueDetail; 
    return (
        <div>
            <img src={strLogo} alt=""/>
            <h3>{strLeague}</h3>
            <p>Founded: {dateFirstEvent}</p>
            <p>Country: {strCountry}</p>
            <p>Sport Type: {strSport}</p>
            <p>Gender: {strGender}</p>
            <p>{strDescriptionEN}</p>
            <p>{strDescriptionFR}</p>


            
        </div>
        
    );
}

export default LeagueDetail;
