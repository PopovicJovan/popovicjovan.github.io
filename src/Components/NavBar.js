import {Button} from "antd";
import {useNavigate} from "react-router";
import Hamburger from 'hamburger-react'
import {useState} from "react";

const NavBar = () => {
    const navigate = useNavigate();
    const [isOpen, setOpen] = useState(false);
    const links = <>
        <a href="/">HOME</a>
        <a href="#">TEHNOLOGY</a>
        <a href="#">PROJECTS</a>
        <Button size={"large"} type={"primary"}>
            <p className="nav-link-button-text" onClick={() => navigate("/contact")}>Get in Touch</p>
        </Button>
    </>;
    return (
        <>
            <nav className="d-none d-md-flex nav-md">
                <div className="logo-div">
                    <span className="logo" onClick={() => navigate("/")}>PORTFOLIO</span>
                </div>
                <div className="nav-links w-50 d-flex justify-content-between align-items-center" id="nav-links">
                    {links}
                </div>
            </nav>
            <nav className="d-flex d-md-none nav-sm">
                <div className="d-flex flex-column align-items-center">
                    <div className="w-50 d-flex justify-content-center">
                        <Hamburger toggled={isOpen} toggle={setOpen} color={"white"}/>
                    </div>
                    <div className={`${isOpen ? "visible" : "invisible"} nav-links w-50 d-flex justify-content-between align-items-center flex-column`} id="nav-links">
                        {links}
                    </div>
                </div>
            </nav>
        </>

    )
}

export default NavBar;