import * as React from "react";
//icon
import { IoTrashOutline } from "react-icons/io5";
import { MdMenu, MdOutlineClose } from "react-icons/md";

//component
import * as Button from "../atom/Button";
//Styling
import "./css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [screenSize, setScreenSize] = React.useState(window.outerWidth);
  const [menu, setMenu] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.outerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClicked = () => {
    if (menu) {
      setIsAnimating(true);
      setTimeout(() => {
        setMenu(false);
        setIsAnimating(false);
      }, 1500);
    } else {
      setMenu(true);
    }
  };

  return (
    <>
      <div className="css_1">
        <div className="css_1_2">
          <IoTrashOutline size={20} color="#065F46" />
          <h1 className="text_1">WOD</h1>
        </div>
        {screenSize > 768 ? (
          <>
            <div className="css_1_3">
              <Link to={"/"}>
                <Button.Button text="Home" />
              </Link>
              <Link to="/partner-with-us">
                <Button.Button text="Partner With Us" />
              </Link>
              <Button.Button text="About Us" />
              <Button.Button text="Help" />
            </div>
            <div className="css_1_4">
              <Button.LoginRegisButton text="Login" />
              <Button.LoginRegisButton text="Register" />
            </div>
          </>
        ) : (
          <>
            <div className="css_menu_1">
              <MdMenu
                size={20}
                color="#065F46"
                type="button"
                onClick={handleClicked}
              />
            </div>
          </>
        )}
      </div>
      {menu ? (
        <div
          className={`css_menu_2 ${isAnimating ? "slide-out" : "slide-in"}`}
          onAnimationEnd={() => {
            if (isAnimating) {
              setMenu(false);
              setIsAnimating(false);
            }
          }}
        >
          <div className={`menu_close`}>
            <h1 className="menu_close_text">Close</h1>
            <MdOutlineClose
              size={20}
              color="#065f46"
              type="button"
              onClick={handleClicked}
            />
          </div>
          <div className="css_submenu">
            <div className="css_menu_2_1">
              <Link to={"/"}>
                <Button.Button text="Home" />
              </Link>
              <Link to={"/partner-with-us"}>
                <Button.Button text="Partner With Us" />
              </Link>
              <Button.Button text="About Us" />
              <Button.Button text="Help" />
            </div>
            <div className="css_menu_2_2">
              <Button.LoginRegisButton text="Login" />
              <Button.LoginRegisButton text="Register" />
            </div>
          </div>
          <div className="author">
            <h1 className="author_text">Created by: Meone</h1>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
