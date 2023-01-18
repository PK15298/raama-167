AFRAME.registerComponent("play-on-click", {
    schema: {
        isPlaying: {
            type: "boolean", default: false
        }
    },
    init: function () {
        console.log("A")
        this.videoEl = this.el.getAttribute("material").src
        this.onClick = this.onClick.bind(this)
    },
    play: function () {
        window.addEventListener("click", this.onClick)
    },
    onClick: function (evt) {
        console.log("B")
        if (!this.videoEl) {
            return
        }
        var isPlaying = this.el.getAttribute("play-on-click").isPlaying
        this.el.object3D.visible = true
        if (!isPlaying) {
            console.log("C"+isPlaying)
            this.el.setAttribute("play-on-click", {
                isPlaying: true
            });
            console.log("E"+isPlaying)
            this.videoEl.play()
            console.log("F"+isPlaying)
        }
        else {
            console.log("D")
            this.el.setAttribute("play-on-click", { 
                isPlaying: false 
            })
            this.videoEl.pause()
        }
    },

});
