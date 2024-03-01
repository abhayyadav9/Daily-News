import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";

export default class News extends Component {
  // let{ title,description,imageUrl}= this.props;

  // articles = []

  static defaultProps = {
    country: "in",
    pageSize: 6,
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: "6",
  };

  constructor() {
    super();
    console.log("HELLO I AM CONSTRUCTOR");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  // using fetch api

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9268b770a13440069c81bbb0ff249832&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let pasedData = await data.json();
    this.setState({
      articles: pasedData.articles,
      totalResults: pasedData.totalResults,
    });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=9268b770a13440069c81bbb0ff249832&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let pasedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: pasedData.articles,
    });
  };

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=9268b770a13440069c81bbb0ff249832&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let pasedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: pasedData.articles,
      });
    }
  };

  render() {
    return (
      <div className="container my-4">
        <h2>DailyNews - Top Heading</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-around">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-primary"
            type="button"
            onClick={this.handlePrevClick}
          >
            &larr;Previous
          </button>
          <button
            className="btn btn-primary "
            type="button"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
