import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card " style={{ width: "18rem" }}>
          <img src={!imageUrl? "https://www.livemint.com/lm-img/img/2024/02/13/1600x900/SGB_vs_PPF_vs_Bank_FD_1707811030515_1707811030839.jpg": imageUrl
          }
            className="card-img-top"
            alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-primary btn-sm"
            >
              READ MORE
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
