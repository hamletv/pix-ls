import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addImage } from "../../store/imagesReducer";
import { useHistory } from "react-router-dom";
import './AddImage.css';

const AddImage = () => {
    const dispatch = useDispatch();
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const userId = useSelector(state => state.session.user.id);
    const history = useHistory();
    const [errors, setErrors] = useState([]);

    useEffect(() =>{
        const validationErrors = [];

        if(description.length < 3) validationErrors.push('Please give a detailed description of your image.');
        if(imageUrl.length < 0) validationErrors.push('Please enter a valid url');
        if(!imageUrl.includes('http')) validationErrors.push('Your url must include http or https prefix.');
         setErrors(validationErrors)

    },[description, imageUrl])

    const reset = () => {
        setDescription('');
        setImageUrl('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newImage = {
            description,
            imageUrl,
            userId,
        };
        dispatch(addImage(newImage));
        reset();
        history.push('/images');
    };

    const handleCancel = (e) => {
        e.preventDefault();
        history.push('/images');
    };

    return (
        <>
        <div className="headline-container">
            <h1>- Add your image -</h1>
        </div>
        <div>
                <div className="form-error">
                    <ul>
                        {errors.map(error => (<li key={error}>{error}</li>))}
                    </ul>
                </div>
            <form onSubmit={handleSubmit} className="form-style">
                <ul>
                    <li>
                        <input
                        type="textarea"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        placeholder="Description"
                        name="description"
                        className="field-style field-full align-none"
                        />
                    </li>
                    <li>
                        <input
                        type="text"
                        onChange={(e) => setImageUrl(e.target.value)}
                        value={imageUrl}
                        placeholder="Image URL"
                        name="imageUrl"
                        className="field-style field-full align-none"
                        />
                    </li>
                </ul>
                <div className="right-form">
                    <ul>
                        <li>
                            <button className="function-button" type="submit" disabled={errors.length > 0}>Add photo</button>
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


export default AddImage;
