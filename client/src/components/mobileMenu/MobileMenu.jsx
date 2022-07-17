/* eslint-disable jsx-a11y/anchor-is-valid */
import './mobileMenu.css';
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

const MobileMenu = ({ mobileMenuDisplay, setMobileMenuDisplay, setOpen }) => {
    return (
        <div className='mobileMenu' style={{ display: mobileMenuDisplay }}>
            {/* <div className="MobileMenuLogoContainer" >
                <NavLink exact to="/">
                    <img className="MobileMenuEmadSaeed-logo" src={logo} alt="" />
                </NavLink>
                <h3 className="MobileMenuName">EMAD SAEED</h3>
                <h5 className="MobileMenuTitle">FULL STACK DEVELPOPER</h5>
            </div> */}
            <ul className="mobileMenuUL">
                <NavLink exact to="/" className="mobileMenuNavLink" activeClassName="selected" onClick={() => { setMobileMenuDisplay("none"); setOpen(false) }}>
                    <HomeIcon className="mobileMenuLinkIcon" />
                    <li className="mobileMenuLink">Home</li>
                </NavLink>
                <NavLink to="/portfolio" className="mobileMenuNavLink" activeClassName="selected" onClick={() => { setMobileMenuDisplay("none"); setOpen(false) }}>
                    <AutoStoriesIcon className="mobileMenuLinkIcon" />
                    <li className="mobileMenuLink">Portfolio</li>
                </NavLink>
                <NavLink className="mobileMenuNavLink" to="/case-study" activeClassName="selected" onClick={() => { setMobileMenuDisplay("none"); setOpen(false) }}>
                    <DocumentScannerOutlinedIcon className="mobileMenuLinkIcon" />
                    <li className="mobileMenuLink">Case study</li>
                </NavLink>
                <NavLink to="/about" className="mobileMenuNavLink" activeClassName="selected" onClick={() => { setMobileMenuDisplay("none"); setOpen(false) }}>
                    <AssignmentIndIcon className="mobileMenuLinkIcon" />
                    <li className="mobileMenuLink">About</li>
                </NavLink>
                <NavLink className="mobileMenuNavLink" to="/contact" activeClassName="selected" onClick={() => { setMobileMenuDisplay("none"); setOpen(false) }}>
                    <ContactMailIcon className="mobileMenuLinkIcon" />
                    <li className="mobileMenuLink">Contact Me</li>
                </NavLink>
            </ul>
            <div className="socialIconsContainer">
                {/* <div className="sContainer"> */}
                <a href="#">
                    <LinkedInIcon className="socialIcon" />
                </a>
                <a href="#">
                    <GitHubIcon className="socialIcon" />
                </a>
                <a href="mailto:hello@emadsaeed.com">
                    <EmailIcon className="socialIcon" />
                </a>
                {/* </div> */}
            </div >
        </div>
    )
}

export default MobileMenu