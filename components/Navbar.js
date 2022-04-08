import Image from "next/image"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

export default function Navbar() {

    const dispatch = useDispatch();
    const cartItemsNumber = useSelector((state) => state.cart.cart);



  return (
    <nav className="navbar navbar-expand-lg  navbar-dark py-3 d-block bg-dark" data-navbar-on-scroll="data-navbar-on-scroll">
    <div className="container"><Link href="/"><a className="navbar-brand d-inline-flex" ><Image className="d-inline-block" src="/favicon.ico" alt="logo" width={38} height={38} /><span className="text-1000 fs-0 fw-bold ms-2">Myshop</span></a></Link>
      <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
      <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item px-2 text-white"><Link className="nav-link fw-medium active" aria-current="page" href="#categoryWomen">Women</Link></li>
          <li className="nav-item px-2 text-white"><Link className="nav-link fw-medium" href="/men">Men</Link></li>
          <li className="nav-item px-2 text-white"><Link className="nav-link fw-medium" href="/collection">Collection</Link></li>
          <li className="nav-item px-2 text-white"><Link className="nav-link fw-medium" href="/jewelery">Jewelery</Link></li>
        </ul>
        <form>
       <Link href="/mycart"><a className="text-1000" >
                <svg className="feather feather-shopping-cart me-3 text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg><span className="position-absolute   translate-middle badge rounded-pill bg-danger">{cartItemsNumber.length}</span></a></Link> 
        </form>


      </div>
    </div>
  </nav>
  )
}
