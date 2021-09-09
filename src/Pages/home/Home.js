import Products from "../../componont/products/Products"
import Banner from "../../componont/banner/Banner"
import { useState } from "react"
const Home = () => {
    const [product, setProduct] = useState(
        [
            {
                id: 1,
                text: 'Women Red t-shirt',
                price: 25,
                size: 'XS',
                color: 'Red',
                material: 'Cotton',
                img: "https://novine-react.envytheme.com/_next/static/images/1-6a494688ade5875c6bc3109e33af850d.jpg"
            },
            {
                id: 2,
                text: 'Women Red t-shirt',
                price: 25,
                size: 'XS',
                color: 'Red',
                material: 'Cotton',
                img: "https://novine-react.envytheme.com/_next/static/images/2-51e72ba6042ca7918f4e4464c4063de9.jpg"
            },
            {
                id: 3,
                text: 'Women Red t-shirt',
                price: 25,
                size: 'XS',
                color: 'Red',
                material: 'Cotton',
                img: "https://novine-react.envytheme.com/_next/static/images/3-56d30ab29e2513400db4bcdb04b6cb1d.jpg"
            }, {
                id: 4,
                text: 'Women Red t-shirt',
                price: 25,
                size: 'XS',
                color: 'Red',
                material: 'Cotton',
                img: "https://novine-react.envytheme.com/_next/static/images/4-c802a0ccfb3b41fcb68c3d8b623c02f1.jpg"
            },
            {
                id: 5,
                text: 'Women Red t-shirt',
                price: 25,
                size: 'XS',
                color: 'Red',
                material: 'Cotton',
                img: "https://novine-react.envytheme.com/_next/static/images/5-da7b0bae10e707351e9c5bb0bed5219a.jpg"
            },
            {
                id: 6,
                text: 'Men Blue shemiz',
                price: 25,
                size: 'XS',
                color: 'Red',
                material: 'Cotton',
                img: "https://novine-react.envytheme.com/_next/static/images/6-0f68829bdac0b6b09082d3123db91998.jpg"
            },
            {
                id: 7,
                text: 'Women Red t-shirt',
                price: 25,
                size: 'XS',
                color: 'Red',
                material: 'Cotton',
                img: "https://novine-react.envytheme.com/_next/static/images/7-7a8079d613afbeca97b5bd055270bbbe.jpg"
            },
            {
                id: 8,
                text: 'Women Red t-shirt',
                price: 25,
                size: 'XS',
                color: 'Red',
                material: 'Cotton',
                img: "https://novine-react.envytheme.com/_next/static/images/img-hover5-defced696029bdb994d20fba72afb2f3.jpg"
            }

        ]

    )


    return (
        <>
            <Banner />
            <Products products={product} />
        </>

    )
}

export default Home
