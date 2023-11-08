let gl;
let program;
let posTreeVBO,
	indTreeVBO,
	posCloudVBO,
	indCloudVBO;

function main() {
	const canvas = document.getElementById("gl-canvas");
	gl = canvas.getContext('webgl2');

	gl.viewport(0,0,canvas.width,canvas.height);
	gl.clearColor(1.0,1.0,1.0,1.0);

	gl.enable(gl.DEPTH_TEST);

	program = initShaders(gl, "vertex-shader", "fragment-shader");
	gl.useProgram(program);

	initBuffers();
	render();
}

function initBuffers() {
	// Tree
	posTreeVBO = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, posTreeVBO);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(tree.positions), gl.STATIC_DRAW);
	gl.bindBuffer(gl.ARRAY_BUFFER, null);

	indTreeVBO = gl.createBuffer()
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indTreeVBO)
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(tree.indices), gl.STATIC_DRAW)
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null)

}

function render() {
	gl.bindBuffer(gl.ARRAY_BUFFER, posTreeVBO);
	const posLoc = gl.getAttribLocation(program, "vPosition");
	gl.enableVertexAttribArray(posLoc);
	gl.vertexAttribPointer(posLoc, 3, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indTreeVBO);

	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	gl.drawElements(gl.TRIANGLES, tree.indices.length, gl.UNSIGNED_INT, 0);
}

window.onload = function () {
	main();
};

