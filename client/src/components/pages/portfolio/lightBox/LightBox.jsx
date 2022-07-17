/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import "./lightBox.css"
import { lightBoxData } from "../portfolioData"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import { useEffect } from "react";

function LightBox({ lightBoxDisplay, setLightBoxDisplay, boxId }) {
    console.log(lightBoxDisplay)

    // useEffect(lightBoxDisplay)

    return (
        <div className="lightBox" style={{ display: lightBoxDisplay ? 'none' : 'block' }}>
            {lightBoxData.filter(item => item.lightBoxId === boxId).map(lightBoxSelectedData => (
                <div key={lightBoxSelectedData.lightBoxId} id="lightBoxOverlay" onClick={() => { setLightBoxDisplay(true) }}>
                    <div id="projectDetails">
                        <div className="closeButton" onClick={() => { setLightBoxDisplay(true) }}><ClearIcon /></div>
                        <div>
                            <header>Project: <strong>{lightBoxSelectedData.projectName}</strong></header>
                            <a href={lightBoxSelectedData.projectLink} style={{ display: lightBoxSelectedData.linkDisplayed }}>{lightBoxSelectedData.projectLink} </a>
                            <img className="mainScreenshotImg screenshotImg" src={lightBoxSelectedData.mainImg} />
                            <header>Description: </header><article>{lightBoxSelectedData.projectDescription}</article>
                            <header>Features: </header>
                            <ul>
                                {lightBoxSelectedData.featurs.map((feature, i) => (
                                    <li key={i + 1}><CheckIcon style={{ marginRight: "10px", fontSize: "small" }} />{feature}</li>
                                ))}
                            </ul>
                            <div className="tecUsed">
                                <header>Technology Used: </header>
                                <ul>
                                    {lightBoxSelectedData.tecUsed.map((tec) => (
                                        <li key={tec.tecId}><ArrowRightIcon style={{ marginRight: "30px" }} /><img src={tec.tecIcon} /></li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                {lightBoxSelectedData.screenshots.map((screenshot, i) => (
                                    <img className="screenshotImg" key={i + 1} src={screenshot} alt="screenshot" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default LightBox
