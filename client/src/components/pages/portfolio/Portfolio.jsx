/* eslint-disable no-unused-vars */
import "./portfolio.css"
import { useState } from 'react';
import Box from "./box/Box";
import LightBox from "./lightBox/LightBox"

function Portfolio() {
    const [lightBoxDisplay, setLightBoxDisplay] = useState(true);
    const [boxId, setBoxId] = useState();
    return (
        <div className="portfolio">
            <LightBox lightBoxDisplay={lightBoxDisplay} setLightBoxDisplay={setLightBoxDisplay} boxId={boxId} />
            <Box setLightBoxDisplay={setLightBoxDisplay} setBoxId={setBoxId} />


        </div>
    )
}

export default Portfolio
