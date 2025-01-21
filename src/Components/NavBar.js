import {Button} from "antd";
import {useNavigate} from "react-router";


const NavBar = () => {
    const navigate = useNavigate();

    return (
        <nav>
            <div className="logo-div">
                <span className="logo" onClick={() => navigate("/")}>PORTFOLIO</span>
            </div>
            <div className="nav-links w-50 d-flex justify-content-between align-items-center" id="nav-links">
                <a href="#">HOME</a>
                <a href="#">TEHNOLOGY</a>
                <a href="#">PROJECTS</a>
                <Button size={"large"} type={"primary"}>
                    <p className="nav-link-button-text">Get in Touch</p>
                </Button>
            </div>
        </nav>
    )
}

export default NavBar;