import logo from "./components/download.jpg"

function Navbar(){
    return(
        <nav className="containernav">
            <img src={logo} alt="Logo"/>
            <ul>
             <li>
                <a href="https://www.facebook.com/">facebook</a>
             </li>
             <li><a href="https://www.google.co.in/">Google</a></li>
            </ul>
        </nav>
    )
}
export default Navbar