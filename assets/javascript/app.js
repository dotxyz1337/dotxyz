var _app = function ()
{
    this.id = 0;
    this.videoElement = null;
    this.audioElement = null;
    this.musicVolume = 0.2;
    this.musicFadeIn = 2000;
    this.skippedIntro = false;
    this.backgroundToggler = false;
    this.shouldIgnoreVideo = false;
    this.effects = ["flash"];
    this.brandDescription = [
        "Verified Idiot", 
        "Node.js and Python Developer",
        "sub to dotxyz on youtube",
        "Certified Weeb"
    ];

    this.iconChanger = function (urls, delay)
    {
        if (!urls)
            return;

        delay = delay || 2000;

        var counter = 0;
        
        setInterval(function () {
            if(counter < urls.length) 
            {
                var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
                link.type = 'image/x-icon';
                link.rel = 'shortcut icon';
                link.href = urls[counter];
                document.getElementsByTagName('head')[0].appendChild(link);
            }
            else 
                counter = 0;

           ++counter;
        }, delay);
    }
};

var app = new _app();