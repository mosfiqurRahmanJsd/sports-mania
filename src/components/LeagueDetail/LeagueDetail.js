import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faFlag, faFootballBall, faMars, faRss } from '@fortawesome/free-solid-svg-icons'



import Male from '../../images/male.png'
import Female from '../../images/female.png'

const LeagueDetail = () => {
    const { id } = useParams();
    const [leagueDetail, setLeagueDetail] = useState({}); 
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagueDetail(data.leagues[0]))
    }, [id]) 

    const { strBanner, strLeague, dateFirstEvent, strCountry, strSport, strGender, strDescriptionEN, strDescriptionFR, strTwitter, strFacebook, strRSS  } = leagueDetail; 

    let img = ""; 
    if(strGender === "Male") {
        img = Male; 
    } else {
        img = Female; 
    }

    const colorBg = {
        backgroundColor: "#0E0A2A",
        paddingBottom: '50px'
    }

    const linkedIcon = {
        padding: "10px", 
        fontSize: "30px", 
        marginTop: "20px"
    }
    return (
        <div style={colorBg}>
            <img src={strBanner} className="w-100 img-fluid" alt=""/>
            <div className="container text-muted">
                <div className="row bg-primary text-white p-3 my-4 rounded d-flex align-items-center">
                    <div className="col-12 col-sm-12 col-md-6">
                        <h3>{strLeague}</h3>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} />  Founded: {dateFirstEvent}</p>
                        <p><FontAwesomeIcon icon={faFlag} />  Country: {strCountry}</p>
                        <p><FontAwesomeIcon icon={faFootballBall} />  Sport Type: {strSport}</p>
                        <p><FontAwesomeIcon icon={faMars} />  Gender: {strGender}</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6">
                        <img src={img} className="img-fluid" alt=""/>
                    </div>
                </div>
                <p>{strDescriptionEN}</p>
                <p>{strDescriptionFR}</p>

                <div className="d-flex justify-content-center">
                    <ul className="list-unstyled d-flex">
                        <li style={linkedIcon}><a href={strTwitter}><FontAwesomeIcon icon={faTwitter} />  </a></li>
                        <li style={linkedIcon}><a href={strFacebook}><FontAwesomeIcon icon={faFacebook} /> </a></li>
                        <li style={linkedIcon}><a href={strRSS}><FontAwesomeIcon icon={faRss} /> </a></li>
                    </ul>
                </div>
            </div>  
        </div>             
        
    );
}

export default LeagueDetail;
