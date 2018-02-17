//---------------------------------------------------------------------------
// This file contains the scene graph built from a BVH file. You should
// not need to modify it. There are helpful comments that describe the
// data structures.
//---------------------------------------------------------------------------

var BVHListener = require('parser/BVHListener');

//------------------------------------------------------------
// Segment
//------------------------------------------------------------

Segment = function() {
  // Name of the segment (e.g. RHipJoint).
  this.name = null;
  // Spatial offset from the parent segment.
  this.offsets = [];
  // Strings giving the channel names.
  this.channels = [];
  // Children segments.
  this.children = [];
  // Offset into the global channel array.
  this.channelOffset = 0;

  // To get the ith channel value for this segment and frame j:
  //   bvh.frames[j][segment.channelOffset + i]
}

Segment.prototype.myToString = function(offset) {
  var ret = offset + "offsets ";
  for (var i = 0; i < this.offsets.length; ++i) {
    var o = this.offsets[i];
    ret = ret.concat(o + " ");
  }
  ret = ret.concat("\n" + offset + "channels ");
  for (var i = 0; i < this.channels.length; ++i) {
    var o = this.channels[i];
    ret = ret.concat(o + " ");
  }
  ret = ret.concat("\n" + offset + "channel offset = " + this.channelOffset);
  for (var i = 0; i < this.children.length; ++i) {
    var s = this.children[i];
    ret = ret.concat("\n" + offset + s.name + "\n");
    ret = ret.concat(s.myToString(offset + "  "));
  }
  return ret;
}

//------------------------------------------------------------
// BVH
//------------------------------------------------------------

BVH = function() {
  // Inherit default listener
  BVHListener.BVHListener.call(this);
  
  // Root segments. Other joints will be children of the roots.
  this.roots = [];
  // Number of frames
  this.numFrames = 0;
  // Length of time a frame should play. In seconds.
  this.frameTime = 0;
  // Frames.
  this.frames = [];

  // Used in constructing the scene graph.
  this.numChannels = 0;
  // Used in constructing the scene graph.
  this.curSegment = null;
  // Used in constructing the scene graph.
  this.stack = new Array();
  return this;
};

BVH.prototype = Object.create(BVHListener.BVHListener.prototype);
BVH.prototype.constructor = BVH;

BVH.prototype.toString = function() {
  var ret = "";
  for (var i = 0; i < this.roots.length; ++i) {
    var r = this.roots[i];
    ret = ret.concat(r.name + "\n");
    ret = ret.concat(r.myToString("  ") + "\n");
  }
  ret = ret.concat("Num frames = " + this.numFrames + "\n");
  ret = ret.concat("Frame time = " + this.frameTime + "\n");
  ret = ret.concat("Num channels = " + this.numChannels + "\n");
  for (var i = 0; i < this.frames.length; ++i) {
    ret = ret.concat("Frame: " + this.frames[i] + "\n");
  }
  return ret;
}

BVH.prototype.enterSegment = function() {
  var parent = this.curSegment;
  var child = new Segment();

  if (parent) {
    this.stack.push(parent);
    parent.children.push(child);
  }
  child.channelOffset = this.numChannels;
  this.curSegment = child;
}

BVH.prototype.exitSegment = function() {
  this.curSegment = this.stack.pop();
}

//------------------------------------------------------------
// Callbacks
//------------------------------------------------------------

BVH.prototype.enterRootSegment = function(ctx) {
  this.enterSegment();
  this.roots.push(this.curSegment);
};

BVH.prototype.exitRootSegment = function(ctx) {
  this.exitSegment();
};

BVH.prototype.enterSegmentID = function(ctx) {
  this.curSegment.name = ctx.getText();
};

BVH.prototype.enterOffset = function(ctx) {
  this.curSegment.offsets.push(ctx.getText());
};

BVH.prototype.enterChannel = function(ctx) {
  this.curSegment.channels.push(ctx.getText());
  ++this.numChannels;
};

BVH.prototype.enterJointSegment = function(ctx) {
  this.enterSegment();
};

BVH.prototype.exitJointSegment = function(ctx) {
  this.exitSegment();
};

BVH.prototype.enterEndSite = function(ctx) {
  this.enterSegment();
  this.curSegment.name = "End site";
};

BVH.prototype.exitEndSite = function(ctx) {
  this.exitSegment();
};

BVH.prototype.enterNumFrames = function(ctx) {
  this.numFrames = parseInt(ctx.getText());
};

BVH.prototype.enterFrameTime = function(ctx) {
  this.frameTime = parseFloat(ctx.getText());
};

BVH.prototype.enterMotionData = function(ctx) {      
  var data = ctx.getText().trim().split(/\s+/);
  var nc = this.numChannels;
  var numFrames = data.length / nc;
  for (var i = 0; i < numFrames; ++i) {
    this.frames.push(data.slice(i*nc, (i+1)*nc));
  }
};

