import "../CSS/NavbarComponent.css"  // Importing the CSS file for NavbarComponent
import { Link } from "react-router-dom";  // Importing Link from react-router-dom
import { FaShopware } from "react-icons/fa";  // Importing FaShopware icon from react-icons/fa

export const NavbarComponent = () => {
    return (
        <div id="navbar">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Link to={"/"} className="navbar-brand" style={{ textTransform: "none" }}><FaShopware />Electrician System</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
