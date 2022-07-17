import './sidebar.css'
import logo from "../../emadsaeed-logo.svg"
import { NavLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Sidebar() {
    return (
        <div className="sidebar" >
            <div className="logoContainer" >
                <NavLink exact to="/">
                    <img className="emadsaeed-logo" src={logo} alt="" />
                </NavLink>
                <h3 className="name">EMAD SAEED</h3>
                <h5 className="title">Software Engineer</h5>
            </div>
            <ul className="menu">
                <NavLink exact to="/" className="sideNavLink" activeClassName="selected" >
                    <HomeIcon className="sideLinkIcon" />
                    <li className="sideLink">Home</li>
                </NavLink>
                <NavLink to="/portfolio" className="sideNavLink" activeClassName="selected" >
                    <AutoStoriesIcon className="sideLinkIcon" />
                    <li className="sideLink">Portfolio</li>
                </NavLink>
                <NavLink className="sideNavLink" to="/case-study" activeClassName="selected" >
                    <DocumentScannerOutlinedIcon className="sideLinkIcon" />
                    <li className="sideLink">Case study</li>
                </NavLink>
                <NavLink to="/about" className="sideNavLink" activeClassName="selected" >
                    <AssignmentIndIcon className="sideLinkIcon" />
                    <li className="sideLink">About</li>
                </NavLink>
                <NavLink className="sideNavLink" to="/contact" activeClassName="selected" >
                    <ContactMailIcon className="sideLinkIcon" />
                    <li className="sideLink">Contact Me</li>
                </NavLink>
            </ul>
            <div className="socialIconsContainer">
                {/* <div className="sContainer"> */}
                <a href="https://www.linkedin.com/in/emad-saeed-398767134" target="_blank">
                    <LinkedInIcon className="socialIcon" />
                </a>
                <a href="#">
                    <GitHubIcon className="socialIcon" />
                </a>
                <a href="mailto:hello@emadsaeed.com">
                    <EmailIcon className="socialIcon" />
                </a>
                {/* </div> */}
            </div>
        </div >
    )
}

export default Sidebar

