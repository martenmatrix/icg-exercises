let gl;
let program;
let positions,
	colors;
let posVBO,
	colorVBO;
let count;

const bitcode = [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,
	1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,
	1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,
	0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,
	1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,
	0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,
	1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,
	1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,
	1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,
	0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,
	0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,
	1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,
	1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
	1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,
	0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,
	0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,
	0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

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
	let size = 0.3;

	// 3. Specify geometry
	positions = [];
	colors = [];
	count = 0;

	let leftOffset = 0;
	size = 32 / 512
	for (let x = 0; x < 32; x++) {
		let bottomOffset = 0;

		for (let y = 0; y < 32; y++) {
			// canvas width and height
			// fill one line from top to bottom
			const oneQuad = [ -1 + leftOffset, -1 + bottomOffset,
				-1 + leftOffset,  -1 + size + bottomOffset,
				-1 + size + leftOffset,  -1 + size + bottomOffset,
				-1 + leftOffset,  -1 + bottomOffset,
				-1 + size + leftOffset, -1 + bottomOffset,
				-1 + size + leftOffset, -1 + size + bottomOffset];
			if (bitcode[x * 32 + y] === 1) {
				positions.push(...oneQuad)
				colors.push(...[0, 1, 0, 1,
					0, 0, 1, 1,
					1, 0, 0, 1,
					1, 0, 0, 1,
					1, 1, 0, 1,
					0, 1, 0, 1])
				count += 6;
			}
			bottomOffset += size;
		}
		leftOffset += size;
	}

	initTriangleBuffers();
}

function initTriangleBuffers() {
	// 5.1 Create VBO for positions and activate it
	posVBO = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, posVBO);

    // 6.1 Fill VBO with positions
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

	// 5.2 Create VBO for colors and activate it
	colorVBO = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, colorVBO);

    // 6.2 Fill VBO with colors
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
}

function renderTriangle() {

	// 7.1 Link data in VBO to shader variables
	gl.bindBuffer(gl.ARRAY_BUFFER, posVBO);
	const posLoc = gl.getAttribLocation(program, "vPosition");
	gl.enableVertexAttribArray(posLoc);
	gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    // 7.2 Link data in VBO to shader variables
    gl.bindBuffer(gl.ARRAY_BUFFER, colorVBO);
	const colorLoc = gl.getAttribLocation(program, "vColor");
	gl.enableVertexAttribArray(colorLoc);
	gl.vertexAttribPointer(colorLoc, 4, gl.FLOAT, false, 0, 0);

	// 8. Render
	gl.clear(gl.COLOR_BUFFER_BIT);
	gl.drawArrays(gl.TRIANGLES, 0, count);
}

main();
