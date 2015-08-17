var Testimonial = require('./testimonial.jsx');
module.exports = React.createClass({
  displayName : 'TestimonialGroup',
  render : function(){
    var testArray = [
      {avatar: "//avatars.githubusercontent.com/u/10890292?v=3", user: 'Hailey F.', quote: 'I met my wife through TagAlong... and my pet lizard!'},
      {avatar: "//avatars.githubusercontent.com/u/1171432?v=3", user: 'Owen D.', quote: 'TagAlong helped me form a community of underwater basket weavers!'},
      {avatar: "//lh6.googleusercontent.com/-z6xtJqqSi_Q/AAAAAAAAAAI/AAAAAAAAAIk/0Btvi-26Z-o/photo.jpg", user: 'Marq\'athan', quote: 'I found other adults who like finger painting on TagAlong!'},
      {avatar: "//avatars.githubusercontent.com/u/12742401?v=3", user: 'Kevin C.', quote: 'Don\'t let your dreams be dreams.'},
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