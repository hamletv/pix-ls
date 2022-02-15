import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateComment } from "../../../store/commentsReducer";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";


const EditComment = ({ comment, commentId, userId }) => {
    const dispatch = useDispatch();
    const { id } = useParams()
    const [updatedComment, setUpdateComment] = useState(comment);
    const [open, showForm] = useState(false);
    const history = useHistory();
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const validationErrors = [];

        if(updatedComment.length === 0) validationErrors.push('Please enter your comment.');
        if(updatedComment.length > 1000) validationErrors.push('Enter a brief comment.');
        setErrors(validationErrors)

    },[updatedComment])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const comment = { comment: updatedComment, imageId: id , userId, id: commentId };
        console.log('This is a comment', comment);
        const response = await dispatch(updateComment(comment));
        if(response){showForm(!open)}
    };

    const toggleForm = (e) => {
        e.preventDefault();
        showForm(!open);
    }

    const handleCancel = (e) => {
        e.preventDefault();
        showForm(!open)
    };

    return (
        <div>
            <div>
                <button className="function-button" onClick={toggleForm}>Edit</button>
            </div>

            {open && (
            <div>

            <h1 className="headline-container">Edit your comment</h1>

            <form className="form-style" onSubmit={handleSubmit}>
                <input
                type="textarea"
                onChange={(e) => setUpdateComment(e.target.value)}
                placeholder="Add your comment here"
                name="comment"
                />
                <div>
                    <button className="function-button" type="submit" onClick={handleSubmit} disabled={errors.length > 0}>Edit comment</button>
                    <button className="function-button" type="submit" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
            <div className="form-error">
            <ul>
                {errors.map(error => (<li key={error}>{error}</li>))}
            </ul>
            </div>
            </div>
            )}
        </div>

    );
};


export default EditComment;
