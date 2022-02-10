import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import SingleImage from "../SingleImage";
import ImageDetail from "../ImageDetail";
import { getImages } from "../../store/imagesReducer";


const ImageList = () => {
    const dispatch = useDispatch();
    const imagesObj = useSelector((state) => state.imageState.entries);
    const images = Object.values(imagesObj);

    useEffect(() => {
        dispatch(getImages());
    }, [dispatch]);

    return (
        <div>
          <h1>Your Images</h1>
          <ol>
            {images.map(({ id, description }) => (
              <ImageDetail key={id} id={id} description={description} />
            ))}
          </ol>

          <Switch>
            <Route path="/images/:id">
              <SingleImage images={images} />
            </Route>
          </Switch>
        </div>
      );
}

export default ImageList;
