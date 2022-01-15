/* eslint-disable default-case */
import React, { Component } from 'react';
import AccountSetup from './AccountSetup';
import SocialsProfile from './SocialsProfile';
import Confirm from './Confirm';
import Success from './Success';


export class MultiForm extends Component {
    state = {
        step: 1,
        service: '',
        barber_id: '',
        date: '',
        name: '',
        email: '',
        phone: '',
        password: '',
        facebook: '',
        twitter: '',
        github: ''
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    inputChange = input => e => {
        this.setState({
            [input]: e.target.value,
        });
        
    };


    render() {
        const { step } = this.state;
        const { service, barber_id, date, name, email, phone, password, facebook, twitter, github } = this.state;
        const values = { service, barber_id, date, name, email, phone, password, facebook, twitter, github };

        switch (step) {
            case 1:
                return (
                    <AccountSetup
                        nextStep={this.nextStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <SocialsProfile
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 4:
                return (
                    <Success />
                );
        }
    }
}

export default MultiForm;