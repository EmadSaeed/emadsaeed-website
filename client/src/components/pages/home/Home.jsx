import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import Particles from 'react-particles-js';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Home() {
    return (
        <div className="home">
            <Particles className="particles" />
            <div className="homeContainer">
                <div className="slideContainer">
                    <img className="mainSlide" src="imgs/main-slide-2.png" alt="" />
                    <img className="mobileMainSlide" src="imgs/main-slide-mobile-meidum.png" alt="" />
                </div>
                <div className="infoContainer">
                    <div className='nameContainer'>
                        <h1 className="mainName">Emad Saeed</h1>
                        <h2 className="mainTitle">Software Engineer</h2>
                    </div>
                    <h1 className="slogan">Get the idea done from concept to implementation!</h1>
                    <div className='contactMeBtn' ><ArrowDownwardIcon className='downArrow' /><NavLink to='/contact'>Contact me!</NavLink></div>
                </div>
            </div>
        </div >
    )
}

export default Home
