import "./box.css";
const boxImages = [
    {
        box_id: 1,
        image_1: "kitwizard-sq-1.jpg",
        image_2: "kitwizard-sq-2.jpg"
    },
    {
        box_id: 2,
        image_1: "homelessHouse-sq-1.jpg",
        image_2: "homelessHouse-sq-2.jpg"
    },
    {
        box_id: 3,
        image_1: "isleOfGreen-sq-1.jpg",
        image_2: "isleOfGreen-sq-2.jpg"
    },
    {
        box_id: 4,
        image_1: "fabradiointernational-sq-1.jpg",
        image_2: "fabradiointernational-sq-2.jpg"
    },
    {
        box_id: 5,
        image_1: "sloganTee-sq-1.jpg",
        image_2: "sloganTee-sq-2.jpg"
    },
    {
        box_id: 6,
        image_1: "hoodiesAndSweats-sq-1.jpg",
        image_2: "hoodiesAndSweats-sq-2.jpg"
    },
    {
        box_id: 7,
        image_1: "impogo-sq-1.jpg",
        image_2: "impogo-sq-2.jpg"
    },
    {
        box_id: 8,
        image_1: "cosmeticGynaecology-sq-1.jpg",
        image_2: "cosmeticGynaecology-sq-2.jpg"
    },
    {
        box_id: 9,
        image_1: "tiptotoePodiatry-sq-1.jpg",
        image_2: "tiptotoePodiatry-sq-2.jpg"
    },
    {
        box_id: 10,
        image_1: "northernCouture-sq-1.jpg",
        image_2: "northernCouture-sq-2.jpg"
    },
    {
        box_id: 11,
        image_1: "scooteringClothing-sq-1.jpg",
        image_2: "scooteringClothing-sq-2.jpg"
    },
]

function Box({ setBoxId, setLightBoxDisplay }) {
    return (
        <div className="boxContainer">
            {boxImages.map(img => (
                <div key={img.box_id} className="box" onClick={() => {
                    setLightBoxDisplay(false);
                    setBoxId(img.box_id);
                    console.log(img.box_id)
                }}>
                    <img src={`/imgs/boxImages/${img.image_1}`} alt="" className="square_1" />
                    <img src={`/imgs/boxImages/${img.image_2}`} alt="" className="square_2" />
                </div>
            ))
            }
        </div >
    )
}

export default Box

