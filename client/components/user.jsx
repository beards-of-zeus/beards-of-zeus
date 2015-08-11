module.exports = React.createClass({
  displayName: 'User',
  render: function(){
    return (
        <div className="panel radius">
            <a href="#"><img className="img-round" src={this.props.user.picture} /></a>
            <h5><a href="#">{this.props.user.name}</a></h5>
              <div className="section-container vertical-nav" data-section data-options="deep_linking: false; one_up: true">
              <section className="section">
                <h5 className="title"><a href="#">Section 1</a></h5>
              </section>
              <section className="section">
                <h5 className="title"><a href="#">Section 2</a></h5>
              </section>
              <section className="section">
                <h5 className="title"><a href="#">Section 3</a></h5>
              </section>
              <section className="section">
                <h5 className="title"><a href="#">Section 4</a></h5>
              </section>
              <section className="section">
                <h5 className="title"><a href="#">Section 5</a></h5>
              </section>
              <section className="section">
                <h5 className="title"><a href="#">Section 6</a></h5>
              </section>
            </div>
          </div>
      )
  }
});