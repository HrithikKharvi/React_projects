import {useSelector} from 'react-redux'

import style from './ProductCard.module.css';
import ShowCartItem from './ShowCartItem.js';

const ProductCard = (props) => {
    let products = useSelector(d => d.product.products);

    return (
        <div className={style.container}>
            {products.map(d => <ShowCartItem key={d.name+d.description} productName={d.name} productCost={d.cost}
                productDescription={d.description}>
        </ShowCartItem>)
}
        </div>
    )
}

export default ProductCard;
