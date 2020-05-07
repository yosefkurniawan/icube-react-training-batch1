import Link from 'next/link';
import { useSelector } from 'react-redux';
import { withRedux } from '../lib/redux';

const Navigation = () => {
    const cart = useSelector((state) => state.cart);
    let cartCount = 0;
    
    if(cart.length) {
        cart.forEach(item => {
            cartCount += parseInt(item.qty);
        });
    }

    return (
        <div>
            <Link href="/">
                <a>Home</a>
            </Link>
            &nbsp; | &nbsp;
            <Link href="/about-us">
                <a>About Us</a>
            </Link>
            &nbsp; | &nbsp;
            <Link href="/cart">
                <a>Cart({cartCount})</a>
            </Link>
        </div>
    );
}

export default (withRedux)(Navigation);
