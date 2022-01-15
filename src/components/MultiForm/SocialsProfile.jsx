import React, { Component } from 'react'

export class SocialsProfile extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-container">
                <h1 className="mb-5">Step-2</h1>
                <div className="form-group">
                    <label htmlFor="facebook">Your Name</label>
                    <input type="text" className="form-control" name="facebook" onChange={inputChange('facebook')} value={values.facebook} />
                </div>
                <div className="form-group">
                    <label htmlFor="twitter">Your Email</label>
                    <input type="email" className="form-control" name="twitter" onChange={inputChange('twitter')} value={values.twitter} />
                </div>
                <div className="form-group">
                    <label htmlFor="github">Your Phone</label>
                    <input type="number" className="form-control" name="github" onChange={inputChange('github')} value={values.github} />
                </div>

                <br />

                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>
                    <div style={{ textAlign: "right"}} className="col-6">
                        <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SocialsProfile;