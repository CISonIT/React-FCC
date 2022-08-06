import reactLogo from "../images/logo.svg"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="right-container">
                <img src={reactLogo} />
                <h3>ReactFacts</h3>
            </div>
            <div className="left-container">
                <h4>React Course - Project 1</h4>
            </div>
        </nav>
    )
}