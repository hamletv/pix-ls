const { validationResult } = require('express-validator');
const { check } = require('express-validator')


const handleValidationErrors = (req, res, next) => {
    const validationErrors = validationResult(req);

    if(!validationErrors.isEmpty()) {
        const errors = validationErrors.array()
        .map((error) => `${error.msg}`);

        const err = Error('Bad request.');
        err.errors = errors;
        err.status = 400;
        err.title = 'Bad request.';
        next(err);
    }
    next();
};

const image = check('imageUrl').notEmpty().isURL().withMessage('Enter a url including http or https prefix.');
const description = check('description').notEmpty().withMessage('Add image description.');
const editImage = check('image.imageUrl').notEmpty().isURL().withMessage('Enter new url including https or https prefix.');
const editDescription = check('image.description').notEmpty().withMessage('Enter new description.');
const comment = check('comment').notEmpty().withMessage('Please enter your comment');
const editComment = check('comment.comment').notEmpty().withMessage('Please enter your comment')

const validateAddImage = [
    image,
    description,
    handleValidationErrors
];

const validateUpdateImage = [
    editImage,
    editDescription,
    handleValidationErrors
];

const validateComment = [
    comment,
    handleValidationErrors
]

const validateEditComment = [
    editComment,
    handleValidationErrors
]

module.exports = {
    handleValidationErrors,
    validateAddImage,
    validateUpdateImage,
    validateComment,
    validateEditComment
 };
