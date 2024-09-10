
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Ankit kumar Singh dolor sit amet consectetur adipisicing elit. Optio, fuga? Saepe tenetur 
            aperiam ut qui Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo dolores harum, cum consectetur assumenda perferendis alias dignissimos ipsam culpa? Hic debitis,
            
          </span>
        </div>
        <div className="item">
            <h1>Contact</h1>
            <span>
            ankitkrsingh7529@gmail.com dolor sit amet consectetur adipisicing elit. Optio, fuga? Saepe tenetur 
            aperiam ut Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, deleniti labore. 
            
            </span>
        </div>
      </div>
      <div className="bottom">
       <div className="left">
        <span className="logo">Apparel</span>
        <span className="copyright">© Copyright 2024. All Rights Reserved </span>
        </div>
        <div className="right">
          <img src="/images/payment.png"></img>
        </div> 
      </div>
    </div>
  )
}

export default Footer