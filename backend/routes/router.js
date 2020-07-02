const express = require('express');
const router = express.Router();

const uuid = require('uuid');
const {sign} = require('jsonwebtoken');
const {genSaltSync, hashSync, compareSync} = require('bcryptjs');

const {
    createUser,
    findUserName,
    getUserByName
} = require('../model/User');

const userMiddleware = require('../middleware/users.js');

router.post('/sign-up', (req, res, next) => {
 const body = req.body;
    findUserName(body, (err, results) => {
      if (results) {
        return res.json({
            success: false,
            msg: 'UserName is already existed'
        })
      } else {
          const salt = genSaltSync(10);
          body.password = hashSync(body.password, salt);
          body.role = '0';
          createUser(body, (err, results) => {
              if (err) {
                  return res.status(500).json({
                      success: false,
                      msg: 'Database Connection Error'
                  });
              }
              return res.status(200).json({
                  success: true,
                  data: results,
                  msg: 'Successfully Registered'
              })
          })
      }
 })

});

router.post('/authentication', (req, res, next) => {
   const body = req.body;
   getUserByName(body, (err, results) => {
      if (err) {
        return res.status(500).json({
            success: false,
            msg: 'Server Error'
        })
      }
      if (!results) {
         return res.status(200).json({
             success : false,
             data: null,
             msg: `User doesn't not exist`
         })
      }
      if (results.role === '1') {
        const passwordCompare = compareSync(body.password, results.password);
        if (passwordCompare) {
           results.password = undefined;
           const jsontoken = sign({result: results}, 'portal2020', {
              expiresIn: '1h'
           });
           return res.status(200).json({
               success : true,
               data: results,
               msg: 'Login Successfully',
               token: jsontoken,
           })
        } else {
           return res.status(200).json({
               success: false,
               msg: 'Invalid Password'
           })
        }
      } else {
         return res.status(401).json({
             success: false,
             msg: 'You are not allowed'
         })
      }
   })
});

router.get('secret-route', (req, res, next) => {
    res.send('This is the secret content. Only logged in users can see that')
});

module.exports = router;