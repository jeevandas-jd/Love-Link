import React, { useState, useEffect } from "react";
import { listAllLetters } from "../api/letterApi";
import { Link } from 'react-router-dom';
import "./LetterList.css";

export const LetterList = () => {
  const [letters, setLetters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // <-- New error state

  useEffect(() => {
    setLoading(true);
    setError(null);

    listAllLetters()
      .then(res => {
        if (res.data?.letterIds) {
          setLetters(res.data.letterIds);
        } else {
          throw new Error("Unexpected response format");
        }
      })
      .catch(err => {
        console.error("API error:", err);
        setError("Server is currently unavailable. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="manuletter-container">
      <header className="manuletter-header">
        <h1 className="manuletter-title">Closure Project</h1>
        <p className="manuletter-subtitle">content archive</p>
      </header>

      <main className="manuletter-main">
        {loading ? (
          <div className="manuletter-loading">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="manuletter-loading-card"></div>
            ))}
            <p className="manuletter-loading-text">Loading letters...</p>
          </div>
        ) : error ? (
          <div className="manuletter-error">
            <p>{error}</p>
            <p className="manuletter-error-subtext">We’re working to fix this. Check back soon.</p>
          </div>
        ) : (
          <div className="manuletter-grid">
            {letters.map((letter) => (
              <Link 
                to={`/letter/${letter.id}`} 
                key={letter.id}
                className="manuletter-card"
              >
                <div className="manuletter-card-border"></div>
                <div className="manuletter-card-content">
                  <h3>{letter.contentName}</h3>
                  <div className="manuletter-card-meta">
                    <span>ID: {letter.id.slice(0, 8)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      <footer className="manuletter-footer">
        <p>© 2023 Closure Project. All rights reserved.</p>
        <p>
          <Link to="/about" className="manuletter-about-link">About</Link>
        </p>
      </footer>
    </div>
  );
};
