import React from 'react';
    import './App.css';
    import Header from './Header';
    import MainContent from './MainContent';
    import Footer from './Footer';
    import EnergiePage from './EnergiePage';
    import TvInternetPage from './TvInternetPage';
    import AutoverzekeringPage from './AutoverzekeringPage';
    import ZorgverzekeringPage from './ZorgverzekeringPage';
    import InboedelverzekeringPage from './InboedelverzekeringPage';

    function App() {
      const path = window.location.pathname;

      let content;
      if (path === '/energie') {
        content = <EnergiePage />;
      } else if (path === '/tv-internet') {
        content = <TvInternetPage />;
      } else if (path === '/autoverzekering') {
        content = <AutoverzekeringPage />;
      } else if (path === '/zorgverzekering') {
        content = <ZorgverzekeringPage />;
      } else if (path === '/inboedelverzekering') {
        content = <InboedelverzekeringPage />;
      } else {
        content = <MainContent />;
      }

      return (
        <div className="App">
          <Header />
          {content}
          <Footer />
        </div>
      );
    }

    export default App;
