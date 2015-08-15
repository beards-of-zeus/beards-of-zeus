module.exports = React.createClass({
  displayName : 'Banner',
  render : function(){
     return (
      <div>
        <div className="row">
          <div className="large-12 hide-for-small">
            <div id="featured" data-orbit>
              <img src="//bit.ly/1LcTUGp" alt="slide image"/>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="large-12 columns show-for-small">
            <img src="//bit.ly/1LcTUGp" />
          </div>
        </div><br/>
      </div>
    );
  }




});
