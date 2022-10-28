var canvas = document.getElementById("mycanvas");
var gl = canvas.getContext('webgl');
var objStr = document.getElementById('my_cube.obj').innerHTML;
var mesh = new OBJ.Mesh(objStr);

// use the included helper function to initialize the VBOs
// if you don't want to use this function, have a look at its
// source to see how to use the Mesh instance.
var object = OBJ.initMeshBuffers(gl, mesh);
// have a look at the initMeshBuffers docs for an exmample of how to
// render the model at this point

console.log(mesh)
console.log(object)