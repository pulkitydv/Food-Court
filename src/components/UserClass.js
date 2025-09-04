import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Default",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/pulkitydv");

    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    const { name, location, twitter_username } = this.state.userInfo;
    
    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h3>Twitter Handle : {twitter_username}</h3>
        <h4>Contact : +91 1234567890</h4>
      </div>
    );
  }
}

export default UserClass;
