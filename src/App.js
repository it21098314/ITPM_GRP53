 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useDispatch, useSelector } from 'react-redux';
import NewProduct from './pages/NewProduct';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';

import Feedbacks from "./pages/Feedbacks";

import FeedbackDetail from "./pages/FeedbackDetail";
import AddFeedback from "./pages/AddFeedback";
import React, { useEffect } from "react";
import ScrollToTop from './components/ScrollToTop';
import CartPage from './pages/CartPage';
import OrdersPage from './pages/OrdersPage';
import AdminDashboard from './pages/AdminDashboard';
import EditProductPage from './pages/EditProductPage';
import UserDashboard from './pages/UserDashboard';
import { io } from "socket.io-client";
import { addNotification } from "./features/userSlice";

import CreateInsta from './components/create-insta.component';
import EditInsta from "./components/edit-insta.component";
import InstaList from "./components/insta-list.component";
import instaPDF from './components/INSTAPDF';
import InstaProductList from "./components/instaproduct-list.component";
import INSTAPDF from './components/INSTAPDF';


import ClientsAdminPDF from './components/ClientAdminPDF'
import CreateGrade from "./components/create-grade.component";
import EditGrade from "./components/edit-grade.component";
import GradeList from "./components/grade-list.component";
 
import GradeStudentList from "./components/gradestudent-list.component";
import GRADEPDF from './components/GRADEPDF';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import AboutUs from './pages/about';
import contact from './pages/contacts'
import Conta from './pages/contacts';


function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const socket = io("ws://localhost:4000");
    socket.off("notification").on("notification", (msgObj, user_id) => {
        // logic for notification
        if (user_id === user._id) {
            dispatch(addNotification(msgObj));
        }
    });

    socket.off("new-order").on("new-order", (msgObj) => {
        if (user.isAdmin) {
            dispatch(addNotification(msgObj));
        }
    });
}, []);

  return (
    <div className="App">
       <BrowserRouter>
       <ScrollToTop/>
       <Navigation/>
       <Routes>
        <Route index element={<Home/>}/>
        {!user && (
                 <>
                      <Route path="/login" element={<Login />} />
                      <Route path="/signup" element={<Signup />} />
                 </>
                    )}

           {user && (
            <>
              <Route path="/user" element={<UserDashboard/>}/>
              <Route path="/cart" element={<CartPage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/about" element={<AboutUs/>}/>
              <Route path="/contact" element={<Conta/>}/>
            </>
          )}

        {user && user.isAdmin && (
                        <>
                            <Route path="/admin" element={<AdminDashboard />} />
                            <Route path="/product/:id/edit" element={<EditProductPage />} />

                           {/* <Route  path='/' component={CreateStock} />*/}
                           <Route path='/' element ={<CreateInsta/>}/>

                           {/*<Route path="/create-stock" component={CreateStock} />*/}
                           <Route path='/create-insta' element ={<CreateInsta/>}/>

                            {/*<Route path="/edit-stock/:id" component={EditStock} />*/}
                            <Route path='/edit-insta/:id' element ={<EditInsta/>}/>

                           {/*<Route path="/Stock-list" component={StockList} />*/}
                           <Route path='/Insta-list' element ={<InstaList/>}/>

                           <Route path="/instaPDF" element={<INSTAPDF />} />
                          {/*<Route path='/stockPDF' element ={<stockPDF/>}/>*/}

                          {/* <Route path="/StockProduct-list" component={StockProductList} />*/}
                          <Route path='/InstaProduct-list' element ={<InstaProductList/>}/>



                         
                           {/*<Route  exact path='/' component={CreateGrade} />*/}
                           <Route path='/' element ={<CreateGrade/>}/>

                           {/*<Route path="/create-grade" component={CreateGrade} />*/}
                           <Route path='/create-grade' element ={<CreateGrade/>}/>

                           {/*<Route path="/edit-grade/:id" component={EditGrade} />*/}
                           <Route path='/edit-grade/:id' element ={<EditGrade/>}/>

                          {/*<Route path="/Grade-list" component={GradeList} />*/}
                          <Route path='/Grade-list' element ={<GradeList/>}/>

                          {/*<Route path="/gradePDF" component={gradePDF} />*/}
                          <Route path="/GRADEPDF" element={<GRADEPDF />} />

                          {/*<Route path="/GradeStudent-list" component={GradeStudentList} />*/}
                          <Route path='/GradeStudent-list' element ={<GradeStudentList/>}/>

                          <Route path='/Customers' element ={<ClientsAdminPDF/>}/>












                             
                        </>
                    )}

        <Route path='/product/:id' element ={<ProductPage/>}/>
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path='/new-product' element ={<NewProduct/>}/>
        <Route path='*' element ={<Home/>}/>
          <Route path="/user" element={<UserDashboard/>}/>
        <Route path="/cart" element={<CartPage />} />
          <Route path="/orders" element={<OrdersPage/>}/>
          <Route path = "/feedbacks" element={<Feedbacks/>}/>
        <Route path = "/myFeedbacks/:id" element={<FeedbackDetail/>}/>
        <Route path = "/contactus" element={<ContactUs/>}/>
        <Route path = "/feedbacks/add" element={<AddFeedback/>}/>
        {""}

       </Routes>
       <Footer/>

       </BrowserRouter>
    </div>
  );
}

export default App;
