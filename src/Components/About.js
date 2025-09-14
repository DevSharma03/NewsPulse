import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card p-4 shadow-sm about-card">
            <h2 className="mb-3">About NewsPulse</h2>
            <p className="lead text-muted">
              NewsPulse is a lightweight React demo that fetches top headlines
              and presents them in a modern card layout. It's optimized for
              readability and quick browsing.
            </p>
            <ul>
              <li>
                Infinite scrolling to load more articles as you reach the
                bottom.
              </li>
              <li>Category-based navigation.</li>
              <li>
                Smooth loading indicators and progressive UI enhancements.
              </li>
            </ul>
            <p className="mt-3">
              Built with React, Bootstrap and a tiny custom stylesheet for
              polish. For a production app move the API key into environment
              variables and add caching.
            </p>
            <div className="d-flex gap-2 mt-3">
              <a
                className="btn btn-dark"
                href="https://newsapi.org/"
                target="_blank"
                rel="noreferrer noopener"
              >
                NewsAPI
              </a>
              <a
                className="btn btn-outline-secondary"
                href="https://github.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
