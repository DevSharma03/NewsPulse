import React, { Component } from "react";
import Newsitems from "./Newsitems";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 9,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalArticles: 0,
    };
    this.observer = null;
  }

  async updateNews() {
    const { country, category, pageSize } = this.props;
    const { page } = this.state;

    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=062cfa709b6d45a68425747443409336&page=${page}&pageSize=${pageSize}`;
    this.setState({ loading: true });

    try {
      let response = await fetch(url);
      let parsedData = await response.json();

      this.setState((prevState) => ({
        articles: [...prevState.articles, ...parsedData.articles],
        totalArticles: parsedData.totalResults,
        loading: false,
      }));
      this.props.setProgress(100);
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.updateNews();

    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.state.loading) {
          this.setState(
            (prevState) => ({ page: prevState.page + 1 }),
            () => this.updateNews()
          );
        }
      },
      {
        root: null,
        threshold: 1.0,
      }
    );

    const anchor = document.querySelector("#scroll-anchor");
    if (anchor) {
      this.observer.observe(anchor);
    }
  }

  componentWillUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Top News Headlines</h1>

        <div className="row">
          {this.state.articles.map((element, index) => (
            <div className="col-md-4 d-flex" key={`${element.url}-${index}`}>
              <Newsitems
                title={element.title ? element.title.slice(0, 40) : " "}
                description={
                  element.description ? element.description.slice(0, 80) : " "
                }
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          ))}
        </div>

        {/* Spinner for loading */}
        {this.state.loading && (
          <div className="text-center my-4">
            <div className="spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}

        {/* Anchor for infinite scrolling */}
        <div id="scroll-anchor" style={{ height: "1px" }}></div>
      </div>
    );
  }
}
