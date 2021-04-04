import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const League = (props) => {
    const { idLeague, strLeague, strSport } = props.league; 
    const history = useHistory(); 
    const showDetail = id => {
        const url = `league/${id}`
        history.push(url); 
    }

    const [logo, setLogo] = useState({}); 
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
        .then(res => res.json())
        .then(data => setLogo(data.leagues[0]))
    }, [idLeague])
    

    return (
        <div className="col-12 com-sm-6 col-md-4 mb-4">
            <div className="card h-100 p-3 text-center">
                <img src={logo.strLogo} className="card-img-top w-75 mx-auto" alt=""/>
                <div className="card-body">
                    <h4>{strLeague}</h4>
                    <p>Sports Type: {strSport}</p>
                    <button className="btn btn-primary" onClick={() => showDetail(idLeague)}> Explore  <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>
        </div> 
    );
}

export default League;
