import React, {Component} from 'react';
import {Text} from 'react-native';
import {Button, Card, CardSection, Input, Spinner} from './common';
import Firebase from './Firebase';

class LoginForm extends Component {
  state = {email: '', password: '', error: '', loading: false};

  onButtonPress() {
    const {email, password} = this.state;
    this.setState({error: '', loading: true});
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        Firebase.auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFailed.bind(this));
      });
  }

  onLoginFailed() {
    this.setState({
      error: 'Authentication failed',
      loading: false,
    });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
    });
  }

  renderButton() {
    if (this.state.loading === true) {
      return <Spinner size="small" />;
    }
    return <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            secureTextEntry
            value={this.state.password}
            onChangeText={(password) => this.setState({password})}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    color: 'red',
    fontSize: 18,
    alignSelf: 'center',
  },
};

export default LoginForm;
