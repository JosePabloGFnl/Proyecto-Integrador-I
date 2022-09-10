var brushWidth = 5;
var color = "#FFFFFF";
var drawingcanvas;

(function() {
  var $ = function(id){return document.getElementById(id)};

  drawingcanvas = this.__canvas = new fabric.Canvas('bigcanvas', {
    isDrawingMode: true
  });

  fabric.Object.prototype.transparentCorners = false;

  if (drawingcanvas.freeDrawingBrush) {
    drawingcanvas.freeDrawingBrush.color = color;
    drawingcanvas.freeDrawingBrush.width = brushWidth;
  }
})();