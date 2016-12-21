var makeRedCarlton = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.step();
  this.setPosition(top, left);
  this.$node.attr('src', 'https://media.giphy.com/media/cjiYC0tvtBNde/giphy.gif');  
};

makeRedCarlton.prototype = Object.create(makeDancer.prototype);
makeRedCarlton.prototype.constructor = makeRedCarlton;

makeRedCarlton.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this, this.step);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe6Qvt4JZfzpNXLV2Jit6YM7wyc7XsPjOGbEncY_9LFRZ7Wiu-






  
  // if (this.front) {
  // this.$node.attr('src', 'https://media.giphy.com/media/BMNYudSjJ9K4E/giphy.gif');  
  //   this.front = false;
  // } else {
  //   this.$node.attr('src', 'https://media1.giphy.com/media/12PrvNr1uAiIDK/200w.gif#58');
  //   this.front = true;
  // }