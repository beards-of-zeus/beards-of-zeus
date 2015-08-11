module.exports = React.createClass({
  displayName : 'Banner',
  render : function(){
     return (
      <div>
        <div className="row">
          <div className="large-12 hide-for-small">
            <div id="featured" data-orbit>
              <img src="//placehold.it/1200x500&text=Slide Image 1" alt="slide image"/>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="large-12 columns show-for-small">
            <img src="//placehold.it/1200x700&text=Mobile Header" />
          </div>
        </div><br/>
      </div>
    );
  }




});
