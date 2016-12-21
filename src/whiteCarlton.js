var makeWhiteCarlton = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.step();
  this.setPosition(top, left);
  this.$node.attr('src', 'http://67.media.tumblr.com/6b1d95681e69c8c16d8f527b18662f38/tumblr_mhoonhisvO1qag57eo1_400.gif');  
};

makeWhiteCarlton.prototype = Object.create(makeDancer.prototype);
makeWhiteCarlton.prototype.constructor = makeWhiteCarlton;

makeWhiteCarlton.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this, this.step);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};

