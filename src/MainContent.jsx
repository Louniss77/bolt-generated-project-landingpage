import React from 'react';
    import './MainContent.css';
    import bespaarLinks from './bespaar-links.jpg';
    import bespaarRechts from './bespaar-rechts.jpg';

    function MainContent() {
      return (
        <main>
          <section className="hero">
            <div className="hero-images-left">
              <img src={bespaarLinks} alt="Bespaar Links" />
            </div>
            <div className="hero-content">
              <h1>Selecteer vergelijker</h1>
              <div className="search-filters">
                <select>
                  <option value="">Selecteer een categorie</option>
                  <option value="energie">Energie</option>
                  <option value="tv-internet">TV & Internet</option>
                  <option value="autoverzekering">Autoverzekering</option>
                  <option value="zorgverzekering">Zorgverzekering</option>
                  <option value="inboedelverzekering">Inboedelverzekering</option>
                </select>
                <button className="search-button">Vergelijk</button>
              </div>
            </div>
            <div className="hero-images-right">
              <img src={bespaarRechts} alt="Bespaar Rechts" />
            </div>
          </section>
          <section className="content">
            <h2>Vergelijk Resultaten</h2>
            <div className="comparison-grid">
              <div className="comparison-item">
                <h3>Product 1</h3>
                <p>Provider A</p>
                <p>Price: €100</p>
              </div>
              <div className="comparison-item">
                <h3>Product 2</h3>
                <p>Provider B</p>
                <p>Price: €120</p>
              </div>
              <div className="comparison-item">
                <h3>Product 3</h3>
                <p>Provider C</p>
                <p>Price: €90</p>
              </div>
              <div className="comparison-item">
                <h3>Product 4</h3>
                <p>Provider D</p>
                <p>Price: €110</p>
              </div>
            </div>
          </section>
        </main>
      );
    }

    export default MainContent;
