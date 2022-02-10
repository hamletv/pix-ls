import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import SingleImage from "../SingleImage";
import ImageDetail from "../ImageDetail";
import AddImage from "../AddImage";
import { getImages } from "../../store/imagesReducer";


const ImageList = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    console.log('Session user', user.id);
    const imagesObj = useSelector((state) => state.imageState.entries);
    const images = Object.values(imagesObj);
    console.log('Presenting images', images[0]);
    console.log('The photographer', user.id);
    const userImages = images.filter(image => image.userId === user.id);
    console.log('User images', userImages);

    useEffect(() => {
        dispatch(getImages());
    }, [dispatch]);

    return (
        <div>
          <h1>Your Images</h1>
          <ol>
            {images.map(({ id, imageUrl, description }) => (
              <ImageDetail key={id} id={id} imageUrl={imageUrl} description={description} />
            ))}
          </ol>

          <Switch>
            <Route path="/images/:id">
              <SingleImage images={images} />
            </Route>
            <Route path="/images/add">
              <AddImage />
            </Route>
          </Switch>
        </div>
      );
}

export default ImageList;
