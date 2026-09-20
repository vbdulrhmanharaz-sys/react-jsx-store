import { Outlet } from "react-router-dom";
import NavBar from "./Common/NavBar";
import Footer from "./Common/Footer";

export default function LayOut() {
  return (
    <>
    <NavBar/>
        <Outlet/>
    <Footer/>
  
    </>
  )
}
