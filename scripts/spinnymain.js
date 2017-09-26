function gameManager(InputManager, StorageManager) {
  this.inputManager = new InputManager();
  this.storage = new StorageManager();
  this.game = document.getElementById("mainGame");
  this.component = new gameComponent();
  this.score = 0;
  this.mainAngle = 0;
  this.positions = {0: 0.0, 1: 51.42, 2: 102.84, 3: 154.26, 4: 207.68, 5: 259.10, 6: 310.52};
  this.position = 0;
}
gameManager.prototype.start = function() {
  window.addEventListener('touchstart', this.userDidTouch);
};
gameManager.prototype.addPosition = function() {
  if (this.position === 6) {
    this.position = 0;
  }
  else {
    this.position++;
  }
};
gameManager.prototype.userDidTouch = function() {
  this.addPosition();
};
gameManager.prototype.testForSuccess = function(color) {
  if (this.position === color) {
    return;
  else {
    this.gameDidEnd();
function gameComponent() {
  this.canvasArea = document.getElementById("mainGame");
  this.y = this.canvasArea.height / 2;
  this.x = this.cavnasArea.width / 2;
  this.color = undefined;
}
gameComponent.prototype.changeColor() {
  var which = Math.ciel(Math.random() * 7);
  var colors = ["red", "green", "blue", "gray", "purple", "yellow", "orange"];
  this.color = colors[which];
  this.mapColorToPosition();
};
gameComponent.prototype.mapColorToPosition() {
  var positionByColor = {0: 0.0, 1: 51.42, 2: 102.84, 3: 154.26, 4: 207.68, 5: 259.10, 6: 310.52};
};
