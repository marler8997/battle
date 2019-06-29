function makeFixedFpsLooper(msPerFrame, gameIterationFunc) {
  return {
    msPerFrame: msPerFrame,
    gameIterationFunc: gameIterationFunc,
    gameIntervalObject: null,
    start: function start() {
      if (this.gameIntervalObject == null) {
        this.gameIntervalObject = setInterval(this.gameIterationFunc, msPerFrame);
      }
    },
    stop: function stop() {
      if (this.gameIntervalObject != null) {
        clearInterval(this.gameIntervalObject);
        this.gameIntervalObject = null;
      }
    }
  };
}
