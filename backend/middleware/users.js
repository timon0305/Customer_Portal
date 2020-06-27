module.exports = {
    validateRegister: (req, res, next) => {
        if (!req.body.email || req.body.email.length < 3) {
            return res.status(400).send({
                msg: 'Please enter a username with min 3 charts'
            });
        }

        if (!req.body.password || req.body.password.length < 6) {
            return res.status(400).send({
                msg: 'Please enter a password with min 6 charts'
            });
        }
        next();
    }
};