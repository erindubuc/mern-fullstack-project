<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load Input Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");
=======
const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load Input Validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Load User model
const User = require('../../models/User');
>>>>>>> 484c1f94508c8483f5655412942a9e233435d3e1

// @route	GET api/users/test
// @desc	Tests users route
// @access	Public
<<<<<<< HEAD
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));
=======
router.get('/test', (req, res) => res.json({msg: "Users Works"}));
>>>>>>> 484c1f94508c8483f5655412942a9e233435d3e1

// @route	GET api/users/register
// @desc	Register user
// @access	Public
<<<<<<< HEAD
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // first, find out if user exists
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200" /*Size*/,
        r: "pg" /*Rating*/,
        d: "mm" /*Default*/
      });

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
=======
router.post('/register', (req, res) => {
	const { errors, isValid } = validateRegisterInput(req.body);
	
	// Check Validation
	if(!isValid) {
		return res.status(400).json(errors);
	}
	
	// first, find out if user exists
	User.findOne({ email: req.body.email })
		.then(user => {
			if(user) {
				errors.email = 'Email already exists';
				return res.status(400).json(errors);
			} else {
				const avatar = gravatar.url(req.body.email, { 
					s: '200',  /*Size*/
					r: 'pg', /*Rating*/
					d: 'mm' /*Default*/
				});
				
				const newUser = new User({
					name: req.body.name,
					email: req.body.email,
					avatar,
					password: req.body.password
				});
				
				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(newUser.password, salt, (err, hash) => {
						if(err) throw err;
						newUser.password = hash;
						newUser
							.save()
							.then(user => res.json(user))
							.catch(err => console.log(err));
					});
				});
			}
		});
>>>>>>> 484c1f94508c8483f5655412942a9e233435d3e1
});

// @route	GET api/users/login
// @desc	Login user / Returning JSonWebToken
// @access	Public
<<<<<<< HEAD
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    if (!user) {
      errors.email = "User not found";
      return res.json(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = { id: user.id, name: user.name, avatar: user.avatar }; //Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

// @route	GET api/users/current
// @desc	Return current user
// @access	Private (protected route)
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;
=======
router.post('/login', (req, res) => {
	const { errors, isValid } = validateLoginInput(req.body);
	
	// Check Validation
	if(!isValid) {
		return res.status(400).json(errors);
	}
	
	const email = req.body.email;
	const password = req.body.password;
	
	// Find user by email
	User.findOne({email})
		.then(user => {
			if(!user) {
				errors.email = 'User not found';
				return res.json(404).json(errors);
			}
			
			// Check Password
			bcrypt.compare(password, user.password)
				.then(isMatch => {
					if(isMatch) {
						// User Matched
						const payload = { id: user.id, name: user.name, avatar: user.avatar } //Create JWT Payload
						
						// Sign Token
						jwt.sign(
							payload, 
							keys.secretOrKey, 
							{ expiresIn: 3600 },
							(err, token) => {
								res.json({
								success: true,
								token: 'Bearer ' + token
								});
							}
						);
					} else {
						errors.password = 'Password incorrect';
						return res.status(400).json(errors);
					}
				});
		});
});

// @route	GET api/users/current
// @desc	Return current user 
// @access	Private (protected route)
router.get(
	'/current', 
	passport.authenticate('jwt', { session: false }), 
	(req, res) => {
		res.json({
			id: req.user.id,
			name: req.user.name,
			email: req.user.email
		});
	}
);

module.exports = router;
>>>>>>> 484c1f94508c8483f5655412942a9e233435d3e1
