
import { Link } from "react-router-dom";
import "./Categories.scss";

const Categories = () => {
      
  return (
    <div className="categories">
      <div className="col">
      <div className="row">
       <img src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg"/>
       <button>
        <Link className="link" to="/products/1">Sale</Link>
       </button>
      </div>
      <div className="row">
      <img src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg"/>
       <button>
        <Link className="link" to="/products/1">Women</Link>
       </button>
      </div>
      </div>

      <div className="col">
        <div className="row">
        <img src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg"/>
       <button>
        <Link className="link" to="/products/1">New Season</Link>
       </button>
        </div>
      </div>
      
      <div className="col col-l">
      <div className="row">
        <div className="col">
            <div className="row">
            <img src="https://images.pexels.com/photos/5758542/pexels-photo-5758542.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
       <button>
        <Link className="link" to="/products/1">Men</Link>
       </button>
            </div>
        </div>
        <div className="col">
            <div className="row"><img src="https://images.pexels.com/photos/18557772/pexels-photo-18557772/free-photo-of-a-person-s-hand-with-a-silver-bracelet-and-ring.jpeg?auto=compress&cs=tinysrgb&w=600"/>
       <button>
        <Link className="link" to="/products/1">Accesorries</Link>
       </button>
       </div>
        </div>
      </div>
      <div className="row">
      <img src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg"/>
       <button>
        <Link className="link" to="/products/1">Shoes</Link>
       </button>
      </div>
      </div>
    </div>
  )
}

  
export default Categories
