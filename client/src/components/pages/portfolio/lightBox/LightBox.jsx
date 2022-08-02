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
                <div key={lightBoxSelectedData.lightBoxId} id="lightBoxOverlay" >
                    <div id="projectDetails">
                        <div className="closeButton" onClick={() => { setLightBoxDisplay(true) }}><ClearIcon /></div>
                        <div>
                            <header>Project: <strong>{lightBoxSelectedData.projectName}</strong></header>

                            {/* Link */}
                            <div linkContainer style={{ display: lightBoxSelectedData.projectLinkDisplayed }}>
                                <a href={lightBoxSelectedData.projectLink} target="_blank" rel="noreferrer noopener" style={{ display: lightBoxSelectedData.linkDisplayed }}>{lightBoxSelectedData.projectLink} </a>
                            </div>

                            {/* Description */}
                            <div className="descriptionContainer" style={{ display: lightBoxSelectedData.descriptionDisplayed }}>
                                <header>Description: </header>
                                <article className="description">{lightBoxSelectedData.projectDescription}</article>
                            </div>

                            {/* Features */}
                            <div className="featureContainer" style={{ display: lightBoxSelectedData.featureDisplayed }}>
                                <header>Features: </header>
                                <ul>
                                    {lightBoxSelectedData.featurs.map((feature, i) => (
                                        <li key={i + 1}><CheckIcon style={{ marginRight: "10px", fontSize: "small" }} />{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* TecUsed */}
                            <div className="tecUsed" style={{ display: lightBoxSelectedData.tecUsedDisplayed }}>
                                <header>Technology Used: </header>
                                <ul>
                                    {lightBoxSelectedData.tecUsed.map((tec) => (
                                        <li key={tec.tecId}><ArrowRightIcon style={{ marginRight: "30px" }} /><img src={tec.tecIcon} /></li>
                                    ))}
                                </ul>
                            </div>

                            {/* Project Iframe */}
                            <div className="projectIframe">
                                <iframe src={lightBoxSelectedData.projectLink}></iframe>
                            </div>

                            {/* screenshots */}
                            <div className="screenshotsContainer" style={{ display: lightBoxSelectedData.screenshotsDisplayed }}>
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
