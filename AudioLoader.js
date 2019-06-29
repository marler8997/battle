
function makeAudioLoader() {
    return {
        loadedHandler: null,
        addedCount: 0,
        loadedCount: 0,
        addedAllAudios: function addedAllAudios(loadedHandler) {
            if (this.loadedHandler)
                throw "addedAllAudios was called more than once";
            this.loadedHandler = loadedHandler;
            if (this.loadedCount == this.addedCount) {
                loadedHandler();
            }
        },
        onload: function onload() {
            audioLoader = this["audioLoader"];
            console.log("loaded audio " + this.src);
            audioLoader.loadedCount++;
            if (audioLoader.loadedHandler && audioLoader.loadedCount == audioLoader.addedCount) {
                audioLoader.loadedHandler();
            }
        },
        addAudio: function addAudio(src) {
            if (this.loadedHandler)
                throw "addAudio() was called on audio loader after calling addedAllAudios()";

            var audio = new Audio();
            audio.src = src;
            audio.addEventListener('canplaythrough', this.onload, false);
            audio["audioLoader"] = this;
            this.addedCount++;
            return audio;
        }
    };
}
