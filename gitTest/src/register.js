import React, { Component } from 'react';
import './register.css';
class Register extends Component {

    constructor() {
        super();
        this.state = {
            Name: '', Email: '', 'Contact Number': '', Password: '', Source: '',Validated: false,
            fields: [
                { type: 'text', name: 'Name', value: '', validated: false },
                { type: 'email', name: 'Email', value: '',validated: false },
                { type: 'number', name: 'Contact Number', value: '',validated: false },
                { type: 'password', name: 'Password', value: '',validated: false }
            ]
        }
        this.changeValue = this.changeValue.bind(this);
        this.submitData = this.submitData.bind(this);
    }
    changeValue(e) {
        if (e.target.name === 'Name') {
            this.setState({ Name : e.target.value });
        }
        else if (e.target.name === 'Email') {
            this.setState({ Email: e.target.value });
        }
        else if (e.target.name === 'Contact Number') {
            this.setState({ 'Contact Number': e.target.value });
        }
        else if (e.target.name === 'Password') {
            this.setState({ Password: e.target.value });
        }
        else if (e.target.name === 'Source') {
            this.setState({ Source: e.target.value });
        }
    }
    submitData(){
        this.state.Validated = false;
        let key = 0;
        let invalidCount = 0;
        for(key in this.state.fields){
            if(this.state[this.state.fields[key]['name']] == ''){
                this.state.fields[key]['validated'] = true;
                invalidCount++;
            }
            else{
                this.state.fields[key]['validated'] = false;
            }
        }
        this.setState({Validated: true});
        if(invalidCount == 0){
            //Send data to API
        }
    }
    render() {
        return (
            <div className="paddt35">
                {this.state.fields.map((dynamicFormFields, i) =>
                    <Formfield key={i} fieldData={dynamicFormFields} changeFunc={this.changeValue} />
                )}
                <span className="submit-span font15"><input type="submit" className="submit-button" value="SIGNUP" onClick={this.submitData} /></span>
            </div>
        );
    }
}

class Formfield extends Component {
    render() {
        return (
            <div className="group">      
                <input className="inputMaterial" type={this.props.fieldData.type} name={this.props.fieldData.name} value={this.props[this.props.fieldData.name]} onChange={this.props.changeFunc}  required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>{this.props.fieldData.name}</label><br/>
                <ErrorMessage showErrMessage =  {this.props.fieldData.validated} fieldName = {this.props.fieldData.name} />
            </div>
        );
    }
}

class ErrorMessage extends Component{
    render(){
        if(this.props.showErrMessage){
            return (
                <span className="err-msg">Please enter {this.props.fieldName}</span>
            );
        }
        else{
            return (<div></div>);
        }
    }
}

export default Register;