import React, {Component} from 'react';
import {View} from 'react-native';
import {Header, Button, CardSection, Spinner} from './components/common';
import LoginForm from './components/LoginForm';
import Firebase from './components/Firebase';

class App extends Component {
  state = {loggedIn: null};

  UNSAFE_componentWillMount() {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  logOut() {
    Firebase.auth().signOut();
    this.setState({loggedIn: false});
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button
              onPress={() => {
                this.logOut();
              }}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
