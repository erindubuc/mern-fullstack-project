<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Post Model
const Post = require("../../models/Post");
//Profile Model
const Profile = require("../../models/Profile");

//Validation
const validatePostInput = require("../../validation/post");
=======
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Post Model
const Post = require('../../models/Post');
//Profile Model
const Profile = require('../../models/Profile');

//Validation
const validatePostInput = require('../../validation/post');
>>>>>>> 484c1f94508c8483f5655412942a9e233435d3e1

// @route	GET api/posts/test
// @desc	Tests posts route
// @access	Public
<<<<<<< HEAD
router.get("/test", (req, res) => res.json({ msg: "Posts Works" }));
=======
router.get('/test', (req, res) => res.json({msg: "Posts Works"}));
>>>>>>> 484c1f94508c8483f5655412942a9e233435d3e1

// @route	GET api/posts
// @desc	Get posts
// @access	Public
<<<<<<< HEAD
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: "No posts found" }));
=======
router.get('/', (req, res) => {
	Post.find()
		.sort({date: -1})
		.then(posts => res.json(posts))
		.catch(err => res.status(404).json({ nopostsfound: 'No posts found'}));
>>>>>>> 484c1f94508c8483f5655412942a9e233435d3e1
});

// @route	GET api/posts/:id
// @desc	Get posts by id
// @access	Public
<<<<<<< HEAD
router.get("/", (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err =>
      res.status(404).json({ nopostfound: "No post found with that ID" })
    );
=======
router.get('/', (req, res) => {
	Post.findById(req.params.id)
		.then(post => res.json(post))
		.catch(err => 
			res.status(404).json({ nopostfound: 'No post found with that ID'}));
>>>>>>> 484c1f94508c8483f5655412942a9e233435d3e1
});

// @route	POST api/posts
// @desc	Create post
// @access	Private
router.post(
<<<<<<< HEAD
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    //Check Validation
    if (!isValid) {
      //If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newPost = new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id
    });

    newPost.save().then(post => res.json(post));
  }
);
=======
	'/', 
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		const { errors, isValid } = validatePostInput(req.body);
		
		//Check Validation
		if(!isValid) {
			//If any errors, send 400 with errors object
			return res.status(400).json(errors);
		}
		
		const newPost = new Post({
			text: req.body.text,
			name: req.body.name,
			avatar: req.body.avatar,
			user: req.user.id
		});
		
		newPost.save().then(post => res.json(post));
	});
>>>>>>> 484c1f94508c8483f5655412942a9e233435d3e1

// @route	DELETE api/posts/:id
// @desc	Delete post
// @access	Private
router.delete(
<<<<<<< HEAD
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          // Check for post owner
          if (post.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: "User not authorized" });
          }

          //Delete
          post.remove().then(() => res.json({ success: true }));
        })
        .catch(err => res.status(404).json({ postnotfound: "No post found" }));
    });
  }
);
=======
	'/:id', 
	passport.authenticate('jwt', { session: false }), 
	(req, res) => {
		Profile.findOne({ user: req.user.id }).then(profile => {
			Post.findById(req.params.id)
				.then(post => {
					// Check for post owner 
					if(post.user.toString() !== req.user.id) {
						return res
							.status(401)
							.json({ notauthorized: 'User not authorized' });
					}
					
					//Delete
					post.remove().then(() => res.json({ success: true }));
				})
				.catch(err => res.status(404).json({ postnotfound: 'No post found' }));
		});
	});
		
>>>>>>> 484c1f94508c8483f5655412942a9e233435d3e1

// @route	POST api/posts/like/:id
// @desc	Like post
// @access	Private
router.post(
<<<<<<< HEAD
  "/like/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          // Check if the user has already liked the post before
          if (
            post.likes.filter(like => like.user.toString() === req.user.id)
              .length > 0
          ) {
            return res
              .status(400)
              .json({ alreadyliked: "User already liked this post" });
          }

          //Add user id to likes array
          post.likes.unshift({ user: req.user.id });

          post.save().then(post => res.json(post));
        })
        .catch(err => res.status(404).json({ postnotfound: "No post found" }));
    });
  }
=======
	'/like/:id', 
	passport.authenticate('jwt', { session: false }), 
	(req, res) => {
		Profile.findOne({ user: req.user.id }).then(profile => {
			Post.findById(req.params.id)
				.then(post => {
					// Check if the user has already liked the post before
					if(post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
						return res.status(400).json({ alreadyliked: 'User already liked this post' });	
					}
					
					//Add user id to likes array
					post.likes.unshift({ user: req.user.id });
					
					post.save().then(post => res.json(post));
					})
					.catch(err => res.status(404).json({ postnotfound: 'No post found' }));
		});
	}
>>>>>>> 484c1f94508c8483f5655412942a9e233435d3e1
);

// @route	POST api/posts/unlike/:id
// @desc	Unlike post
// @access	Private
router.post(
<<<<<<< HEAD
  "/unlike/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          // Check if the user has already liked the post before
          if (
            post.likes.filter(like => like.user.toString() === req.user.id)
              .length === 0
          ) {
            return res
              .status(400)
              .json({ notliked: "You have not liked this post" });
          }

          // Get remove index
          const removeIndex = post.likes
            .map(item => item.user.toString())
            .indexOf(req.user.id);

          // Splice out of array
          post.likes.splice(removeIndex, 1);

          // Save
          post.save().then(post => res.json(post));
        })
        .catch(err => res.status(404).json({ postnotfound: "No post found" }));
    });
  }
=======
	'/unlike/:id', 
	passport.authenticate('jwt', { session: false }), 
	(req, res) => {
		Profile.findOne({ user: req.user.id }).then(profile => {
			Post.findById(req.params.id)
				.then(post => {
					// Check if the user has already liked the post before
					if(post.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
						return res.status(400).json({ notliked: 'You have not liked this post' });	
					}
					
					// Get remove index
					const removeIndex = post.likes
						.map(item => item.user.toString())
						.indexOf(req.user.id);
						
					// Splice out of array
					post.likes.splice(removeIndex, 1);
					
					// Save
					post.save().then(post => res.json(post));
					
					})
					.catch(err => res.status(404).json({ postnotfound: 'No post found' }));
		});
	}
>>>>>>> 484c1f94508c8483f5655412942a9e233435d3e1
);

// @route	POST api/posts/comment/:id
// @desc	Add comment to post
// @access	Private
<<<<<<< HEAD
router.post(
  "/comment/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    //Check Validation
    if (!isValid) {
      //If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    Post.findById(req.params.id)
      .then(post => {
        const newComment = {
          text: req.body.text,
          name: req.body.name,
          avatar: req.body.avatar,
          user: req.user.id
        };

        // Add to comments array
        post.comments.unshift(newComment);

        // Save
        post.save().then(post => res.json(post));
      })
      .catch(err => res.status(400).json({ postnotfound: "No post found" }));
  }
);
=======
router.post('/comment/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
	const { errors, isValid } = validatePostInput(req.body);
		
	//Check Validation
	if(!isValid) {
		//If any errors, send 400 with errors object
		return res.status(400).json(errors);
	}
	
	Post.findById(req.params.id)
		.then(post => {
			const newComment = {
				text: req.body.text,
				name: req.body.name,
				avatar: req.body.avatar,
				user: req.user.id
			}
			
			// Add to comments array
			post.comments.unshift(newComment);
			
			// Save
			post.save().then(post => res.json(post))
		})
			.catch(err => res.status(400).json({ postnotfound: 'No post found' }));

});
>>>>>>> 484c1f94508c8483f5655412942a9e233435d3e1

// @route	DELETE api/posts/comment/:id/:comment_id
// @desc	Remove comment from a post
// @access	Private
router.delete(
<<<<<<< HEAD
  "/comment/:id/:comment_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Post.findById(req.params.id)
      .then(post => {
        //Check to see if comment exists
        if (
          post.comments.filter(
            comment => comment._id.toString() === req.params.comment_id
          ).length === 0
        ) {
          return res
            .status(404)
            .json({ commentnotexists: "Comment does not exist" });
        }

        // Get remove index
        const removeIndex = post.comments
          .map(item => item.id.toString())
          .indexOf(req.params.comment_id);

        // Splice comment out of the array
        post.comments.splice(removeIndex, 1);

        post.save().then(post => res.json(post));
      })
      .catch(err => res.status(400).json({ postnotfound: "No post found" }));
  }
);

module.exports = router;
=======
	'/comment/:id/:comment_id', 
	passport.authenticate('jwt', { session: false }), 
	(req, res) => {
	
	Post.findById(req.params.id)
		.then(post => {
			//Check to see if comment exists
			if(post.comments.filter(comment => comment._id.toString() === req.params.comment_id).length === 0) {
				return res.status(404).json({ commentnotexists: 'Comment does not exist' });
			}
			
			// Get remove index
			const removeIndex = post.comments
				.map(item => item.id.toString())
				.indexOf(req.params.comment_id);
			
			// Splice comment out of the array
			post.comments.splice(removeIndex, 1);
			
			post.save().then(post => res.json(post));
			
		})
			.catch(err => res.status(400).json({ postnotfound: 'No post found' }));

});


module.exports = router;
>>>>>>> 484c1f94508c8483f5655412942a9e233435d3e1
