import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import categories from '../categories'
import {LinkContainer} from "react-router-bootstrap"
import '../CSS/Home.css';
import axios from "../axios"
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from '../features/productSlice'
import ProductPreview from '../components/ProductPreview'



 
function Home() {

   

   const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const lastProducts = products.slice(0, 8);

  useEffect(() => {
    axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
     }, []);


  return (
    <div className='home'>
      <img src="https://res.cloudinary.com/dvcfip5fe/image/upload/v1680661040/1_tjgnr4.png" className="home-banner" />
      <div className='featured-products-container container mt-4'>
        <h2>Latest course</h2>
           {/* last products here */}

           <div className="d-flex justify-content-center flex-wrap">
                    {lastProducts.map((product) => (
                        <ProductPreview {...product} />
                    ))}
                </div>

      
          <div>
            <Link to="/category/all" style={{ textAlign: "right", display: "block", textDecoration: "none" }}>
                        See more {">>"}
            </Link>
          </div>

     </div>
          
            {/* sale banner */}

            <div className="sale__banner--container mt-4">
                <img src="https://res.cloudinary.com/dvcfip5fe/image/upload/v1682061381/Black_Orange_Simple_Open_Donation_Banner_cudsa7.png" />
            </div>

            <div className="recent-products-container container mt-4">
                <h2>Categories</h2>
                <Row>
                    {categories.map((category) => (
                        <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`}>
                            <Col md={4}>
                                <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`, gap: "10px" }} className="category-tile">
                                  {category.name}
                                </div>
                            </Col>
                        </LinkContainer>
                    ))}
                </Row>
            </div>

  

    </div>
  )
}

export default Home
