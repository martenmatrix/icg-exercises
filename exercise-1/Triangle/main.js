let gl;
let program;
let data;
let vbo;

function main() {

	// 1. Get canvas and setup WebGL context
    const canvas = document.getElementById("gl-canvas");
	gl = canvas.getContext('webgl2');

	// 2. Configure viewport
	gl.viewport(0,0,canvas.width,canvas.height);
	gl.clearColor(1.0,1.0,1.0,1.0);

	// 4. Init shader program via additional function and bind it
	program = initShaders(gl, "vertex-shader", "fragment-shader");
	gl.useProgram(program);

	initTriangle();
	renderTriangle();
};

function initTriangle() {

	// 3. Specify geometry
	data = [ -1, -1, 1, 0, 0, 1,
		0,  1, 1, 1, 0, 1,
		1, -1, 0, 0, 1, 1,
		1,  1, 1, 1, 1, 1,
	];

	initTriangleBuffers();
}

function initTriangleBuffers() {

	// 5.1 Create VBO for positions and activate it
	vbo = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);

    // 6.1 Fill VBO with positions
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
}

function renderTriangle() {

	// 7.1 Link data in VBO to shader variables
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	const posLoc = gl.getAttribLocation(program, "vPosition");
	const colLoc = gl.getAttribLocation(program, "vColor");
	gl.enableVertexAttribArray(posLoc);
	gl.enableVertexAttribArray(colLoc);
	gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 6 * 4, 0);
	gl.vertexAttribPointer(colLoc, 4, gl.FLOAT, false, 6 * 4,   2 * 4);

	// 8. Render
	gl.clear(gl.COLOR_BUFFER_BIT);
	gl.drawArrays(gl.TRIANGLES, 0, 3);
}

main();
