
function makeImageLoader() {
    return {
        loadedHandler: null,
        addedCount: 0,
        loadedCount: 0,
        addedAllImages: function addedAllImages(loadedHandler) {
            if (this.loadedHandler)
                throw "addedAllImages was called more than once";
            this.loadedHandler = loadedHandler;
            if (this.loadedCount == this.addedCount) {
                loadedHandler();
            }
        },
        onload: function onload() {
            imageLoader = this["imageLoader"];
            console.log("loaded image " + this.src);
            imageLoader.loadedCount++;
            if (imageLoader.loadedHandler && imageLoader.loadedCount == imageLoader.addedCount) {
                imageLoader.loadedHandler();
            }
        },
        addImage: function addImage(src) {
            if (this.loadedHandler)
                throw "addImage() was called on image loader after calling addedAllImages()";

            var image = new Image();
            image.src = src;
            image.onload = this.onload;
            image["imageLoader"] = this;
            this.addedCount++;
            return image;
        }
    };
}
