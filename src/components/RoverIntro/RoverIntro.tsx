import "./styles.scss";
import imgCuriosity from "../../assests/Curiosity.jpg";
import imgPerseverance from "../../assests/PerseveranceParts.jpg";
import imgLandingsMap from "../../assests/LandingSites.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

export default function RoverIntro() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [hasCompleted, setHasCompleted] = useState(false);
  const TOTAL_IMAGES = 31;

  const scrollNextImage = () => {
    setSelectedImage((currentImage) => {
      if (currentImage === TOTAL_IMAGES) {
        setHasCompleted(true);
        return TOTAL_IMAGES;
      }
      return currentImage + 1;
    });
  };

  useEffect(() => {
    let intervalId: string | number | NodeJS.Timer | undefined;
    if (!hasCompleted) {
      intervalId = setInterval(() => {
        scrollNextImage();
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [hasCompleted]);

  const imagePath = `${process.env.PUBLIC_URL}/Scrollimages/Mars${selectedImage + 1}.png`;
  const [linkRovers, setLinkRovers] = useState<boolean>(false);
  const handleClickLink = () => {
    setLinkRovers(true);
  };
  return (
    <div className="rover-page">
      <h1 className="RoverlandingTitle">Mars Rovers</h1>
      <br />
      <br />
      <div className="main-section">
        <div className="MarsImagesScroll">
          <img src={imagePath} alt={`Mars${selectedImage + 1}`} />
        </div>
        <div>
          <p className="RoverText">
            We have been working towards going to mars since the 1960s.
            <br />
            <br />
            Starting with fly by missions, then orbiting spacecrafts.
            <br />
            <br />
            Currently NASA has two active Rovers in Mars: Curiosity and
            Perseverance.
            <br />
            <br />
            You can explore images captured by the NASA's rovers: Curiosity,
            Spirit and Opportunity.
            <br></br>
            <div className="buttonContainer">
              <Link to={"/marsrover"} className="rover-link">
                <Button onClick={() => setLinkRovers(true)} name="Explore" />
              </Link>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
