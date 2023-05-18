import React from "react";
import { Container, Nav, Tab, Col, Row } from "react-bootstrap";
import ClientsAdminPage from "../components/ClientsAdminPage";
import "../CSS/AdminDashboard.css";
import DashboardProduct from "../components/DashboardProduct";
import InstaList from "../components/insta-list.component";
import GradeList from "../components/grade-list.component";
import Feedbacks from "./Feedbacks";
import OrdersAdminPage from "../components/OrdersAdminPage";
import Feedback from "./Feedback";
import DonationList from "../components/donation-list.component";
//import Feedbacks from "../pages/Feedbacks";
    function AdminDashboard() {
     return (
        <Container>
            <Tab.Container defaultActiveKey="products">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="products">Course</Nav.Link>
                             
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="orders">Orders</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="clients">CustomersReport</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="StockRepot">Instuctor Mannagement</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="OrderReport">Order Report</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Donation">Donation</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="products">
                         <DashboardProduct/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="orders">
                                <OrdersAdminPage/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="orders">
                            </Tab.Pane>
                            <Tab.Pane eventKey="clients">
                                <ClientsAdminPage/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="StockRepot">
                                <InstaList/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="OrderReport">
                                <GradeList/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Donation">
                                <DonationList/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
}

export default AdminDashboard;