import { Outlet } from "react-router-dom"
import Navbar from "../SharedComponents/Navbar"
import Footer from "../SharedComponents/Footer"


function MainLayout() {
  return (
    <div className="max-w-7xl mx-auto">
        {/* navbar */}
        <Navbar></Navbar>

        {/* outlet */}
        <Outlet></Outlet>

        {/* footer */}
        <Footer></Footer>

    </div>
  )
}

export default MainLayout