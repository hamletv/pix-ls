import { NavLink } from 'react-router-dom';

const ImageDetail = ({ id, description }) => {
  return (
    <li>
      <NavLink to={`/images/${id}`}>{description}</NavLink>
    </li>
  );
};

export default ImageDetail;
