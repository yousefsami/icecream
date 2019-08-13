'use strict';

class LikeHeldText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return (
      <div>Salam</div>
    );
  }
}

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
    this.hello = this.hello.bind(this);
  }

  hello() {
    alert("Liked");
  }
  
  render() {
    return (
      <div>
        <LikeHeldText />
        <button onClick={this.hello}>Like</button>
      </div>
    );
  }
}

ReactDOM.render(
  <LikeButton/>,
  document.getElementById('root')
);

const getMessage = () => "Hello World";
document.getElementById('root').innerHTML = getMessage();