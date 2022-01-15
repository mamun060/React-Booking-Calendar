import React, { Component } from 'react'

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        alert("Confirm booking!");
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {
            values: { service, barber_id, date,  name, email, phone, password, facebook, twitter, github }
        } = this.props;

        return (
            <div className="form-container">
                <h1 className="mb-5">Confirm</h1>
                <ul class="list-group">
                    <li class="list-group-item">Service_id: {service}</li>
                    <li class="list-group-item">Barder_id: {barber_id}</li>
                    <li class="list-group-item">Booking Date: {date}</li>
                    <li class="list-group-item">Name: {name}</li>
                    <li class="list-group-item">Email: {email}</li>
                    <li class="list-group-item">Phone Number: {phone}</li>
                    <li class="list-group-item">Password: {password}</li>
                    <li class="list-group-item">Your Name: {facebook}</li>
                    <li class="list-group-item">Your Email: {twitter}</li>
                    <li class="list-group-item">Your Phone: {github}</li>
                </ul>

                <br /><br />

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

export default Confirm;