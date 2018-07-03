import React, { Component } from 'react';

class Board extends Component {

  render() {
    const{
      name,
      title,
      image,
      description,
    } = this.props.boardmember;
    
    console.log(this.props.boardmember)
    
    return(
      <div className="column is-one-third">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by4">
                <img src={image} alt={name} />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <h3 className="title is-4">{name}<br />
                  <span className="has-text-weight-light">{title}</span></h3>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Board;