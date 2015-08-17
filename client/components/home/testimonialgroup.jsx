var Testimonial = require('./testimonial.jsx');
module.exports = React.createClass({
  displayName : 'TestimonialGroup',
  render : function(){
    var testArray = [
      {avatar: "//placehold.it/50x50&text=[img]", user: 'Hailey F.', quote: 'I met my wife through TagAlong... and my pet lizard!'},
      {avatar: "//placehold.it/50x50&text=[img]", user: 'Owen D.', quote: 'TagAlong helped me form a community of underwater basket weavers!'},
      {avatar: "//placehold.it/50x50&text=[img]", user: 'Marq\'athan', quote: 'I found other adults who like finger painting on TagAlong!'},
      {avatar: "//placehold.it/50x50&text=[img]", user: 'Kevin C.', quote: 'Don\'t let your dreams be dreams.'},
    ];
    return (
      <div className="row">
        {testArray.map(function(quote){
          return (
            <div className="large-3 small-12 columns" key={quote.user}>
              <Testimonial avatar={quote.avatar} name={quote.user} quote={quote.quote}/>
            </div>
            )

        })}
      </div>
    );
  }

});