import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({children}) => (
  <section className="Card card">
    <div className="card-content">{children}</div>
  </section>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

const Avatar = ({photoUrl, altText}) => (
  <img className="card-avatar" src={photoUrl} alt={altText}/>
);

Avatar.propTypes = {
  photoUrl: PropTypes.node.isRequired,
  altText: PropTypes.string.isRequired,
};

const Title = ({mainTitle, subTitle}) => (
  <div className="card-title">
    <div>{mainTitle}</div>
    <div className="card-subtitle">{subTitle}</div>
  </div>
);


Title.propTypes = {
  mainTitle: PropTypes.node.isRequired,
  subTitle: PropTypes.string.isRequired,
};

const Info = ({icon, children, desc = icon}) => (
  <div className="card-info">
    <i className="material-icons" title={desc}>
      {icon}
    </i>
    <span>{children}</span>
  </div>
);

Info.propTypes = {
  icon: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  desc: PropTypes.string.isRequired,
};


Card.Avatar = Avatar;
Card.Title = Title;
Card.Info = Info;

export default Card;
