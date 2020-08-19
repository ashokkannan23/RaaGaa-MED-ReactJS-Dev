import React from 'react';
import './Components/CSS/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Togglenavbar from './Components/Togglenavbar';
import SocialLogoWeb from './Components/SocialLogoWeb';
import PatientFilter from './Components/PatientFilter';
import UserIcons from './Components/UserIcons';
import BodyContent from './Components/BodyContent';

function App() {

    return (
        <div className="container-fluid">
            <div className="row header-bg">
                <div className="nopadding">
                    <UserIcons/>
                </div>
                <div className="nopadding">
                    <PatientFilter/>
                </div>
                <div className="nopadding">
                    <div className="titlename">
                        <h5>Sri Narayana Eductional And Medical Research Center</h5>
                        <p>334,Chenglepet Main Road,Chenglepet</p>
                    </div>
                </div>
                <div className="nopadding">
                    <SocialLogoWeb/>
                </div>
            </div>
            <div className="row">
                <div className="content-width float-left">
                    <BodyContent/>
                </div>
                <div className="togglenav float-right">
                    <Togglenavbar/>
                </div>

            </div>
        </div>
    );
}

export default App;
