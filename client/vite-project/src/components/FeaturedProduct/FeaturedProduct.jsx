import Card from "../Card/Card"
import "./FeaturedProduct.scss"
import PropTypes from "prop-types";
const FeaturedProduct = ({type}) => {
    const data = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/17729092/pexels-photo-17729092/free-photo-of-portrait-madeleine-hardeep-jpg.jpeg?auto=compress&cs=tinysrgb&w=400",
        img2: "https://images.pexels.com/photos/17729097/pexels-photo-17729097/free-photo-of-portrait-madeleine-hardeep-jpg.jpeg?auto=compress&cs=tinysrgb&w=400",
        title: "Dry Fit",
        isNew: true,
        oldPrice: 1200,
        price: 800,
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/10009958/pexels-photo-10009958.jpeg?auto=compress&cs=tinysrgb&w=400",
        title: "Blazzer",
        isNew: true,
        oldPrice: 1400,
        price: 900,
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto-compress&cs=tinys",
        title: "White dress",
        oldPrice: 900,
        price: 400,
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/3284698/pexels-photo-3284698.jpeg?auto=compress&cs=tinysrgb&w=400",
        title: "Black and White",
        oldPrice: 600,
        price: 900,
    },
];

  return (
    <div className="FeaturedProduct">
       <div className="top">
       <h1>{type} Products</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Soluta ratione quibusdam tenetur delectus aut 
        reiciendis quis repudiandae aliquam facere! 
        Excepturi laboriosam quis sunt mollitia optio pariatur 
        dicta quo cumque libero.</p>
       </div>
       <div className="bottom">
         {data.map(item=>(
            <Card item={item} key={item.id}/>
         ))}
       </div>
    </div>
  )
}
FeaturedProduct.propTypes = {
    type: PropTypes.string.isRequired, // Validate that 'type' is a required string
};
export default FeaturedProduct
