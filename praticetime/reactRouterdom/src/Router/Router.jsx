import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
  } from "react-router-dom";
  import App from "../App";
  import MainPage from "../component/MainPage";
  import PaymentPage from "../component/PaymentPage";
  import Card from "../component/Card";
  import LeftDiv from "../component/LeftDiv";
  
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        
          <Route path="" element={<LeftDiv />}>
            <Route path="/" element={<Card />} />
            <Route path="payment" element={<PaymentPage />} />
          </Route>
        </Route>
      
    )
  );
  
  export default router;
  