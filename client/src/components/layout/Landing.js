import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {
	// check to see if we are logged in or not
	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/dashboard');
		}
	}

	render() {
		return (
			<div className="landing">
				<div className="dark-overlay landing-inner text-light">
					<div className="container">
						<div className="row">
							<div className="col-md-12 text-center">
								<h1 className="display-3 mb-4">hackerHub</h1>
								<p className="lead">
									{' '}
									Where developers can create a profile/portfolio, share ideas, get help, and connect with other developers
		                </p>
								<hr />
								<Link to="/register" className="btn btn-lg btn-info mr-2" role="tab">
									Sign Up
		                </Link>
								<Link to="/login" className="btn btn-lg btn-light" role="tab">
									Login
		                </Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Landing.propTypes = {
	auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps)(Landing);