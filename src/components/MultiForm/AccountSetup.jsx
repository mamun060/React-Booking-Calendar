import React, { Component } from 'react'
import {Form} from 'react-bootstrap';
import Calendar from 'react-calendar';

export class AccountSetup extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-container">
                <h1 className="mb-5">Step-01</h1>

                <Form.Select name='service' onChange={inputChange('service')} value={values.service} aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="Hair">Hair</option>
                    <option value="SPA">SPA</option>
                    <option value="Haircut">Haircut</option>
                </Form.Select>

                <Form.Select name='barber_id' onChange={inputChange('barber_id')} value={values.barber_id} aria-label="Default select example">
                    <option>Choose Barber</option>
                    <option value="Mamun">Mamun</option>
                    <option value="Noor">Noor</option>
                    <option value="Dalim">Dalim</option>
                </Form.Select>

                <Calendar
                
                />

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" onChange={inputChange('name')} value={values.name} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="email" onChange={inputChange('email')} value={values.email} />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="number" className="form-control" name="phone" onChange={inputChange('phone')} value={values.phone} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" onChange={inputChange('password')} value={values.password} />
                </div>

                <br />

                <div style={{ textAlign: "right"}}>
                    <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                </div>
            </div>
        )
    }
}

export default AccountSetup;