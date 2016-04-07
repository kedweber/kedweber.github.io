var Button = React.createClass({
  render: function(){
      return (
          <button>GO</button>
      )
  }
});

//mounting a component
React.render(<Button />, document.getElementById('root'));