(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Door1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AgOBBQgXgBgIgEQgVgLgEgkQgEgbAIgWQAKgcAZgHQAVgFAfAQQAWALAHALQAGAHAFAUIALAsQAFAUgvAPIgRAFQgJgGgSgCg");
	this.shape.setTransform(144.6324,135.7813);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACvUoIomgFQiDgBhHgIQhvgMhSgiQgPgGgFgHQgHgKAHgOQAEgGAFgEIABgNQAAgcACgOIABgDIgEgIQgDgMADgMQACgIAGgPIAGgNQABgNAFgIIABgbIAAjBQAAgvgCgXIgOh0QgIhOgBgbQgCgTAEgMQgEgFgDgHIgCgNIgBgNIgGgZQgCgJABgSQABgNAEgHIABgCQADiJgejYQgpkbgEhkQgFh9ASjTQAUj4AChZQABghgBhDIAAhlQABgjAMgNQAKgKARgDQAKgCAVAAQBKAABwgTQCigbAYgDQC2gWEqAhIDxAcQCKAOBnABIBzABQBDACAvAJQAbAFALALQAGAGACAHQALALABAdQAHDxAAB5QAADIgMChQgDAxgJBaIgMCMQgKCPgCDNIgBFdQgFGog9ELQgKApgWABQgJABgJgGIgBAAIhgAWQhIAQgmAHQg+AMgyAFQg9AGhyAAIgiAAgAlbziQg4AFiXAaQiDAWhNADIggH+QgMDIACBlQADCCAlEgQAjEPgCCUIgCAXIABANQAAAMgDAIQAGAHADAJQADAKAAANIgBAXQAAAOAEAcIAIA3IAIBEQAFAygBBNIAACAQABA1gCAXQgBARgEAPQgBAPgEATQgHAigBAMIAAAWIAAAKIACAAQBQAZBpAIQA+AFB/ACIGfAEQCaACBNgEQCAgGBjgYIBLgSQAsgKAggCIANAAIABgFQA7j8AFmLIABlHQAAjDAJiDQADg7AKhsIANinQALihABjFQAAiGgGjhQAAgMADgKQicgEhEgDQiEgFhogJQjmgchzgLQh3gMhjAAQhFAAg7AGgAIUC7QgNgGgEgRQgjgOgTgqQgRgkABgtQACghAIgWQAMgcAagUQAagTAggCQAfgCAnAPQAnAQATAaQANASALArQALAsgIAeQgIAdgQAWQgPAVgkAOQgjANgaAAQgaAAgMgFgAIighQgYAHgLAbQgIAWAEAcQAEAkAWALQAIAEAWABQAUACAIAGIASgFQAvgPgFgUIgMgtQgFgUgFgGQgIgLgVgLQgYgMgSAAIgMABg");
	this.shape_1.setTransform(86.7704,131.9952);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3300CC").s().p("ABHToImfgEQh/gCg+gFQhpgIhQgZIgCAAIAAgKIAAgWQABgMAHgiQAEgTABgPQAEgPABgRQACgXgBg1IAAiAQABhNgFgyIgIhEIgIg3QgEgcAAgOIABgXQAAgNgDgKQgDgJgGgHQADgIAAgMIgBgNIACgXQACiUgjkPQglkggDiCQgChlAMjIIAgn+QBNgDCDgWQCXgaA4gFQCQgODKAUQBzALDmAcQBoAJCEAFQBEADCcAEQgDAKAAAMQAGDhAACGQgBDFgLChIgNCnQgKBsgDA7QgJCDAADDIgBFHQgFGLg7D8IgBAFIgNAAQggACgsAKIhLASQhjAYiAAGQg4ADhgAAIhPgBgAImhhQggACgaATQgaAUgMAcQgIAWgCAhQgBAtARAkQATAqAjAOQAEARANAGQAMAFAaAAQAaAAAjgNQAkgOAPgVQAQgWAIgdQAIgegLgsQgLgrgNgSQgTgagngQQgigNgdAAIgHAAg");
	this.shape_2.setTransform(86.8607,131.9693);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173.6,264);


// stage content:
(lib.door1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.entrance = new lib.Door1();
	this.entrance.name = "entrance";
	this.entrance.setTransform(488.05,458.6,1,1,0,0,0,86.8,132);
	new cjs.ButtonHelper(this.entrance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.entrance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(913.3,710.6,-338.5,-120);
// library properties:
lib.properties = {
	id: '42C49C3C5F567A47B5201E957BB71A1E',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['42C49C3C5F567A47B5201E957BB71A1E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;