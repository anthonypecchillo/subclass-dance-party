// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  
  // use jQuery to create an HTML <span> tag
  this.$node = $('<img class="dancer"></img>');
  this.$node.attr('src', 'https://media1.giphy.com/media/12PrvNr1uAiIDK/200w.gif#58');
};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var context = this;
  setTimeout(this.step.bind(context), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function() {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};