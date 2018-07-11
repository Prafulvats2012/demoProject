import React, { Component } from 'react';
import './register.css';
class Register extends Component {

    constructor() {
        super();
        this.state = { name: '', email: '', phonenumber: '', password: '', source: '',
        fields: [
            {type: 'text', name: 'Name' , value: ''},
            {type: 'email', name: 'Email', value: ''},
            {type: 'number', name: 'Contact Number', value: ''},
            {type: 'password', name: 'Password', value: ''},
            {type: 'text', name: 'Source', value: ''} 
        ] }
        this.changeValue = this.changeValue.bind(this);
    }
    changeValue(e) {
        if (e.target.name === 'Name') {
            this.setState({ name: e.target.value });
        }
        else if (e.target.name === 'Email') {
            this.setState({ email: e.target.value });
        }
        else if (e.target.name === 'Contact Number') {
            this.setState({ phonenumber: e.target.value });
        }
        else if (e.target.name === 'Password') {
            this.setState({ password: e.target.value });
        }
        else if (e.target.name === 'Source') {
            this.setState({ source: e.target.value });
        }
    }
    render() {
        return (
            <div>
                {this.state.fields.map((dynamicFormFields,i)=>
                    <Formfield key={i} fieldData={dynamicFormFields} changeFunc={this.changeValue}/>
                )}
            </div>
        );
    }
}

class Formfield extends Component{
    render(){
        return(
            <div>
                <label>{this.props.fieldData.name} :</label>
                <input type={this.props.fieldData.type} name={this.props.fieldData.name} value={this.props.fieldData.value} onChange={this.props.changeFunc} />
            </div>
        );
    }
}

export default Register;