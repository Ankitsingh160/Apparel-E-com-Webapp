
import "./card.scss";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const Card = ({item}) => {

  return (
    
      <Link className="link" to={`/product/${item?.id}`}>
      <div className="card">
        <div className="image">
          {item.isNew && <span>New Season</span>}
           <img src={item.img} alt="" className="mainImg"/>
           <img src={item.img2} alt="" className="secondImg"/>
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3> <span className="currency-icon"><CurrencyRupeeIcon /></span>
          {item.oldPrice}</h3>
          <h3><span className="currency-icon"><CurrencyRupeeIcon /></span>
          {item.price}</h3>
        </div>
      </div>
    
      </Link>
    
  )
}
Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
   img: PropTypes.string.isRequired,
    img2: PropTypes.string, // If img2 is optional
    title: PropTypes.string.isRequired,
    isNew:PropTypes.number.isRequired,
    oldPrice: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
export default Card
