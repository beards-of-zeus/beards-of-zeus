module.exports = React.createClass({
  displayName: "Footer",
  render: function() {
    return (
      <footer className="row">
        <div className="large-12 columns">
          <hr/>
          <div className="row">
            <div className="large-5 columns">
              <p>© Copyright Beards of Zeus.</p>
            </div>
            <div className="large-6 columns">
              <a href="http://hackreactor.com">
                <img className="hack-reactor" src="//i.imgur.com/x86kKmF.png" alt="Built at Hack Reactor" /></a>
            </div>
            <div className="large-1 columns">
              <a href="https://www.positivessl.com"><img src="//www.positivessl.com/images-new/PositiveSSL_tl_trans.png" alt="SSL Certificate" title="SSL Certificate" border="0" /></a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
});