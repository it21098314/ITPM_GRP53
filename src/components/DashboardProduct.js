import React from "react";
import { Table, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDeleteProductMutation } from "../services/appApi";
import "./DashboardProducts.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfDocument from './pdfDocument'
import Pagination from "./Pagination";



function DashboardProducts() {
  const products = useSelector((state) => state.products);
  const user = useSelector((state) => state.user);
  // removing the product
  const [deletProduct, { isLoading, isSuccess }] = useDeleteProductMutation();
  function handleDeleteProduct(id) {
    // logic here
    if (window.confirm("Are you sure?"))
      deletProduct({ product_id: id, user_id: user._id });
  }

  function TableRow({ pictures, _id, name, price }) {
    return (
        <tr>
            <td>
                <img src={pictures[0].url} className="dashboard-product-preview" />
            </td>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                <Button onClick={() => handleDeleteProduct(_id, user._id)} disabled={isLoading}>
                    Delete
                </Button>
                <Link to={`/product/${_id}/edit`} className="btn btn-warning">
                    Edit
                </Link>
            </td>
        </tr>
    );
}

  return (
    <div>
      <PDFDownloadLink
        document={<PdfDocument products={products} />}
        fileName="products.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download PDF"
        }
      </PDFDownloadLink>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th></th>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Course Price</th>
          </tr>
        </thead>
        <tbody>
          
           <Pagination data={products} RenderComponent={TableRow} pageLimit={1} dataLimit={4} tablePagination={true} />
        </tbody>
      </Table>
    </div>
  );
}

export default DashboardProducts;