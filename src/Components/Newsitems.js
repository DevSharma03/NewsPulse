import React, { Component } from "react";

export class Newsitems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    const fallback = "/logo192.png";
    const formattedDate = date
      ? new Date(date).toLocaleString()
      : "Unknown date";
    return (
      <div className="my-3">
        <div
          className="card h-100 shadow-sm hover-raise"
          style={{ borderRadius: "10px", overflow: "hidden" }}
        >
          <div
            style={{
              height: "200px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#f5f5f5",
            }}
          >
            <img
              src={imageUrl || fallback}
              className="card-img-top"
              alt={title}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = fallback;
              }}
            />
          </div>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">
              {title}
              {title && title.length > 40 ? "..." : ""}
            </h5>
            <p className="card-text text-muted flex-grow-1">
              {description}
              {description && description.length > 80 ? "..." : ""}
            </p>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <small className="text-muted">
                By {!author ? "Unknown" : author}
              </small>
              <small className="text-muted">{formattedDate}</small>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span className="badge bg-secondary">
                {!source ? "Unknown" : source}
              </span>
              <a
                rel="noreferrer noopener"
                href={newsUrl}
                target="_blank"
                className="btn btn-sm btn-dark"
              >
                Read
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitems;
