//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function askForThreadStats(elt) {
  console.log(elt.target.getAttribute('thread-id'))
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// On page load
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
(function() {
// Getting elements
btnGetStats = document.getElementsByClassName('btn-get-stats')
// btnGetStats = document.getElementsByClassName('btn-get-stats')[1].getAttribute('thread-id')

// Event Listeners
for (var i = 0; i < btnGetStats.length; i++) {
  this.btnGetStats[i].addEventListener("click", function (elt) {
    this.askForThreadStats(elt);
  }.bind(this));
}

})();
