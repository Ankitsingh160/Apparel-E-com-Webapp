import{
  createBrowserRouter,
  RouterProvider,
  Outlet
} 
//here we use outlet of react-router-dom to use nav bar and footer section in all other pages

from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.scss";
const Layout=()=>{
  return( 
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
     
    </div>
  )
}
const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
    {path:"/",
      element:<Home/>
    },

    {path:"/products/:id",
      element:<Products/>
    },

    {path:"/product",
      element:<Product/>
    }
      
    ]
  },
  
])
function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
