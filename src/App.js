import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { io } from "socket.io-client";
import { addNotification } from "./features/userSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from './components/Navigation';
import NewProduct from './pages/NewProduct';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateInsta from "./components/create-insta.component";

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
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path='/new-product' element={<NewProduct />} />
          <Route path='/create-insta' element ={<CreateInsta/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

