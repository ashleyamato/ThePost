import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const Login = () => (

  <div>
    <h2 className = 'signIn'>login/signup</h2>
    {/* <TextField
      hintText="Hint Text"
    /><br />
    <br />
    <TextField
      hintText="The hint text can be as long as you want, it will wrap."
    /><br /> */}
    <TextField
      id="text-field-default"
      defaultValue="email address"
     /><br />
    {/* <TextField
      hintText="Hint Text"
      floatingLabelText="password"
    /><br />
    <TextField
      defaultValue="Default Value"
      floatingLabelText="Floating Label Text"
    /><br /> */}
    {/* <TextField
      hintText="Hint Text"
      floatingLabelText="Fixed Floating Label Text"
      floatingLabelFixed={true}
    /><br /> */}
    <TextField
      hintText="Password Field"
      floatingLabelText="Password"
      type="password"
    /><br />
    {/* <TextField
      hintText="MultiLine with rows: 2 and rowsMax: 4"
      multiLine={true}
      rows={2}
      rowsMax={4}
    /><br />
    <TextField
      hintText="Message Field"
      floatingLabelText="MultiLine and FloatingLabel"
      multiLine={true}
      rows={2}
    /><br />
    <TextField
      hintText="Full width"
      fullWidth={true}
    /> */}



      <RaisedButton label="Submit" style={style} />
      <RaisedButton label="Sign Up" primary={true} style={style} />
      {/* <RaisedButton label="Secondary" secondary={true} style={style} />
      <RaisedButton label="Disabled" disabled={true} style={style} />
      <br />
      <br />
      <RaisedButton label="Full width" fullWidth={true} /> */}


  </div>
);

export default Login