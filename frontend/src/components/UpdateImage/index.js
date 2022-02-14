import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeImage, getImages, updateImage } from "../../store/imagesReducer";
import './UpdateImage.css';


const UpdateImage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const imagesObj = useSelector((state) => state.imageState.entries);
    const user = useSelector(state => state.session.user);
    const images = imagesObj[id];
    const history = useHistory();
    const [description, setDescription] = useState(images?.description || '');
    const [imageUrl, setImageUrl] = useState(images?.imageUrl || '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const image = { description, imageUrl, id };
        await dispatch(updateImage(image));
        history.push(`/images/${image.id}`)
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        await dispatch(removeImage(id))
        return history.push('/images');
    };

    const handleCancel = async (e) => {
        e.preventDefault();
        return history.push(`/images/${images.id}`);
    };

    useEffect(() => {
        if(images) {
            setDescription(images.description)
            setImageUrl(images.imageUrl);
        }
    }, [imagesObj]);

    useEffect(() => {
        dispatch(getImages())
    }, [dispatch]);

    return (
        <>
        <div className="headline-container">
            <h1>- Edit your image -</h1>
        </div>
        <div >
            <form onSubmit={handleSubmit} className="form-style">
                <input
                className="field-style field-full align-none"
                type="text"
                required
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                placeholder="Description"
                name="description"
                />
                <input
                className="field-style field-full align-none"
                type="text"
                required
                onChange={(e) => setImageUrl(e.target.value)}
                value={imageUrl}
                placeholder="Image URL"
                name="imageUrl"
                />
                <div className="right-form">
                    <ul>
                        <li>
                            <button type="submit" onClick={handleSubmit} className="function-button">Edit photo</button>
                        </li>
                        <li>
                            <button className="function-button" type="submit" onClick={handleDelete}>Delete photo</button>
                        </li>
                        <li>
                            <button className="function-button" type="submit" onClick={handleCancel}>Cancel</button>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
        </>
    );
};


export default UpdateImage;
