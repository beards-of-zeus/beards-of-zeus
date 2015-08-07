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
              <ul className="inline-list right">
                <li><a href="#">Section 1</a></li>
                <li><a href="#">Section 2</a></li>
                <li><a href="#">Section 3</a></li>
                <li><a href="#">Section 4</a></li>
                <li><a href="#">Section 5</a></li>
              </ul>
            </div>
            <div className="large-1 columns">
              <a href="https://www.positivessl.com"><img src="https://www.positivessl.com/images-new/PositiveSSL_tl_trans.png" alt="SSL Certificate" title="SSL Certificate" border="0" /></a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
});