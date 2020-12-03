import React from 'react';
import { Router } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications'

import history from './history';
import Routes from "./routes";

// Components
import Header from './components/misc/Header';
import Footer from './components/misc/Footer';

// CSS
import "./assets/css/Text.scss";
import "./assets/css/Align.scss";
import "./assets/css/Images.scss";
import "./assets/css/Forms.scss";
import "./assets/css/PricingTable.scss";
import "./assets/css/Misc.scss";
import 'simplebar/dist/simplebar.min.css';
import 'react-image-lightbox/style.css';

// This component fixes bug where new page load would sometimes be in the middle or bottom
import ScrollToTop from "./components/misc/ScrollToTop";

function App() {
  return (
    <ToastProvider placement="top-center" autoDismiss={true}>
      <Router history={history}>
        <ScrollToTop>
          <Header />
          <Routes />
          <Footer />
        </ScrollToTop>
      </Router>
    </ToastProvider>
  );
}

export default App;
 