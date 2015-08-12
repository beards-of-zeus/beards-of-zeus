module.exports = React.createClass({
  displayName: 'CreateActivity',
  render: function(){
    return (
        <div>
          <h3>Create Your Activity</h3>
          <form action="/data/activities" method="post">
            <input type='hidden' name='user_id' value={this.props.user_id}/>
            <label>Title: </label><input type="text" name="title" ref="title"/>
            <label>Description: </label><textarea name="description" ref="description"></textarea>
            <label>Location: </label><input type="text" name="location" ref="location"/>
            <label>Keywords: </label><input type="text" name="keywords" ref="keywords"/>
            <button type="submit">Add Activity</button>
          </form>
        </div>
      );
  }
});