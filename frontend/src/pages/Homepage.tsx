import * as React from "react";

// Component
import Navbar from "../components/Navbar";

// css
import "./css/Homepage.css";
import Carousel from "../components/Carousel";

function Homepage() {
  const [screenSize, setScreenSize] = React.useState(window.outerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.outerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="home_1">
      <Navbar />
      <div className="background_1">
        {screenSize > 768 ? (
          <div className="background_1_1">
            <h1 className="text_home_1">
              Sampah Hilang <br /> Hati Senang
            </h1>
            <div className="tag_text">
              <h1 className="text_home_2">Someone. Cerdikiawan</h1>
              <h1 className="text_home_3">#BahagiaTanpaSampah</h1>
            </div>
          </div>
        ) : (
          <div className="background_1_2">
            <h1 className="text_home_1_1">
              Sampah Hilang <br /> Hati Senang
            </h1>
            <div className="tag_text_1">
              <h1 className="text_home_2_1">Someone. Cerdikiawan</h1>
              <h1 className="text_home_3_1">#BahagiaTanpaSampah</h1>
            </div>
          </div>
        )}
      </div>
      <div className="title-home">
        <div className="title-carousel">Kenapa WOD?</div>
        <Carousel />
      </div>
    </div>
  );
}

export default Homepage;
