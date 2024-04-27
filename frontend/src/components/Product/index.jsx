import './index.css';
import ProductImg from '../../images/product.png'

const Product = () => {
    return <div className="product">
        <img src={ProductImg} width='100%'/>
        <p className="product-title">Product Title</p>
        <p className="price">$10</p>
    </div>
}

export default Product;