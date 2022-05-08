import { Navbar } from "./Components/Navbar/Navbar";
import { PrivateComponent } from "./Components/PrivateComponent";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./Components/Login";
import Products from "./Components/Products.jsx";
import Signup from "./Components/Signup";
import { Home } from "./Components/Home/Home";
import { Footer } from "../src/Components/Footer/Footer";
import { Navbarpayment } from "./Components/CartComponents/components/navbarfinal/Paymentnavbar";
import { Fullbagpage } from "./Components/CartComponents/components/Fullbagpage/fullbagpage";
import { Fulladdresspage } from "./Components/CartComponents/addresspagecomponents/Fulladdresspage/Fulladdresspage";
import { Fullpaymentpage } from "./Components/CartComponents/paymentcomponents/Fullpaymentpage";
import { useEffect } from "react";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
   const Location = useLocation();
   console.log(Location);

   useEffect(() => {}, []);

   return (
      <div className="App">
         {/* <Navbar /> */}
         {Location.pathname === "/bag" ||
         Location.pathname === "/address" ||
         Location.pathname === "/payment" ? (
            <Navbarpayment />
         ) : (
            <Navbar />
         )}
         <ScrollToTop />
         <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
               path="/men"
               element={<Products data={"menTShirts"} />}
            ></Route>
            <Route
               path="/women"
               element={<Products data={"womensProducts"} />}
            ></Route>
            <Route
               path="/kids"
               element={<Products data={"boysData"} />}
            ></Route>
            <Route
               path="/home&living"
               element={<Products data={"homeData"} />}
            ></Route>
            <Route
               path="/Beauty"
               element={<Products data={"beautyData"} />}
            ></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>

            <Route
               // path="/cart"
               path="/bag"
               element={
                  <PrivateComponent>
                     {/* <Cart /> */}
                     <Fullbagpage />
                  </PrivateComponent>
               }
            ></Route>
            <Route
               path={"/address"}
               element={
                  <PrivateComponent>
                     <Fulladdresspage />
                  </PrivateComponent>
               }
            ></Route>
            <Route
               path={"/payment"}
               element={
                  <PrivateComponent>
                     <Fullpaymentpage />
                  </PrivateComponent>
               }
            ></Route>
         </Routes>

         <Footer></Footer>
      </div>
   );
}

export default App;
