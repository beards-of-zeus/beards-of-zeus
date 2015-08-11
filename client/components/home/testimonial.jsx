module.exports = React.createClass({
  displayName : 'Testimonial',
  render: function(){
    return (
      <div>
        <div className='row person'>
          <div className='small-4 columns'>
            <img className="img-round" src={this.props.avatar}/>
          </div>
          <div className='small-8 columns'>
            <h5>{this.props.name}</h5>
          </div>
        </div>
        <div className='row'>
          <blockquote>
            {this.props.quote}
          </blockquote>
        </div>
      </div>
    )
  }
});