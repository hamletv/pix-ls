import { NavLink } from 'react-router-dom';
import React from 'react';


const ImageDetail = ({ id, description, imageUrl }) => {
  return (
      <NavLink to={`/images/${id}`}>
        <img alt={description} src={`${imageUrl}`} />
      </NavLink>
  );
};

export default ImageDetail;
