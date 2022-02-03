const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const user = require('../../db/models/user.js');
const { restoreUser } = require('../../utils/auth.js');
const { requireAuth } = require('../../utils/auth.js');
const sessionRouter = require('./session');
const usersRouter = require('./users')


router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
});
/*
// TESTING MIDDLEWARE FUNCS CODE. REMOVE ONCE TESTS RESULTS OK
// test token cookie route
router.get('/set-token-cookie', asyncHandler(async (req, res) => {
    const user = await User.findOne({
        where: {
            username: 'Demo-lition'
        }
    });
    setTokenCookie(res, user);
    return res.json({ user });
}));


// test restore user middleware route
router.get('/restore-user', restoreUser,(req, res) => {
    return res.json(req.user);
  }
);


// test require user authentication
router.get('/require-auth', requireAuth, (req, res) => {
    return res.json(req.user);
});

router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
});
*/


module.exports = router;
