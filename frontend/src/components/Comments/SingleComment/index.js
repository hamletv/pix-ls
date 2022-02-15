import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../../store/commentsReducer";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const WriteComment = ({ imageId }) => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');
    const userId = useSelector(state => state.session.user.id);
    const history = useHistory();
    const [errors, setErrors] = useState([])

    const reset = () => {
        setComment('');
    };

    useEffect(() => {
        const validationErrors = [];

        if(comment.length === 0) validationErrors.push('Please enter your comment.');
        if(comment.length > 1000) validationErrors.push('Enter a brief comment.');
        setErrors(validationErrors)

    },[comment])

    const handleSubmit = (e) => {
        e.preventDefault();
        const newComment = {
            comment,
            imageId,
            userId,
        };
        dispatch(addComment(newComment));
        reset();
        history.push(`/images/${imageId}`);
    };

    const handleCancel = (e) => {
        e.preventDefault();
        history.push(`/images`);

    };

    return (
        <>
        <div className="headline-container">
            <h1>- Add your comment -</h1>
        </div>
        <div className="form-error">
            <ul>
                {errors.map(error => (<li key={error}>{error}</li>))}
            </ul>
        </div>
        <div>
            <form onSubmit={handleSubmit} className="form-style">
                <input
                className="field-style field-full align-none"
                type="textarea"
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                placeholder="Add your comment here"
                name="comment"
                />
                <div>
                    <button className="function-button" type="submit" onClick={handleSubmit} disabled={errors.length > 0}>Add comment</button>
                    <button className="function-button" type="submit" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
        </>
    );
};


export default WriteComment;
