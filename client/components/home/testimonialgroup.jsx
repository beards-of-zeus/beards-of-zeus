var Testimonial = require('./testimonial.jsx');
module.exports = React.createClass({
  displayName : 'TestimonialGroup',
  render : function(){
    var testArray = [
      {avatar: "//placehold.it/50x50&text=[img]", user: 'Macho Man', quote: 'Oh YEEEEEAH'},
      {avatar: "//placehold.it/50x50&text=[img]", user: 'Jon Snow', quote: 'Winter is Coming'},
      {avatar: "//placehold.it/50x50&text=[img]", user: 'Austin Powers', quote: 'Yeah Babby Yeah'},
      {avatar: "//placehold.it/50x50&text=[img]", user: 'Daryl from Walking Dead', quote: 'Sorry Brother'},
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