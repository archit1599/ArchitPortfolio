import Product from "../product/product"
import "./productList.css"
import {products} from "../../data"

function productList() {
    return (
        <div className="pl">
            <div className="pl-text">
                <h1 className="pl-title">
                    Create & Inspire
                </h1>
                <p className="pl-desc">
                The Paragraphs module in Drupal provides editors with a component driven architecture for building pages. Morpht has been developing Paragraph approaches to site building since 2015. This case study captures some of the content from a Drupal 7 "Paragraphs Demo" site which was built to showcase what could be done with Paragraphs.  
                </p>
            </div>
            <div className="pl-list">
                {products.map((item=>(
                    <Product key={item.id} img={item.img} link={item.link}/>
                )))}
                
            </div>
        </div>
    )
}

export default productList
