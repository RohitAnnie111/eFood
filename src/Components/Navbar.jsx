
import { Link } from "react-router-dom"
export default  function Navbar()
{
  return(
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-success fs-2">
  <div className="container-fluid">
    <h1>eFood</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
       <Link to ="/" className="nav-link active " aria-current="page"> Home</Link>
        </li>
        <li className="nav-item">
       <Link to ="Login" className="nav-link" >Login</Link>
        </li>
        <li className="nav-item">
       <Link to ="Signup" className="nav-link" >Signup</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </>
  )   
}