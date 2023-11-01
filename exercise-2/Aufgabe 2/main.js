let gl;
let program;
let positions,
	indices,
	colors;
let posVBO,
	indVBO,
	colorVBO;

//TODO 2.1: indices und VBO deklarieren.

function main() {

	// Get canvas and setup WebGL context
	const canvas = document.getElementById("gl-canvas");
	gl = canvas.getContext('webgl2');

	// Configure viewport
	gl.viewport(0,0,canvas.width,canvas.height);
	gl.clearColor(1.0,1.0,1.0,1.0);

	// 5. Add depth test
	gl.enable(gl.DEPTH_TEST);

	// Init shader program via additional function and bind it
	program = initShaders(gl, "vertex-shader", "fragment-shader");
	gl.useProgram(program);


	/*
        // Hier könntet ihr eine Funktion implementieren, die eure .ply Dateien automatisch lädt - dies heben wir uns für später auf.
        // Es hat viele Vorteile, beispielsweise, dass ihr eure Modelle einfacher nochmal anpassen könnt. Allerdings seht ihr so nie im Detail, wie eure Datei eigentlich aufgebaut ist.
        // Jetzt geht es erstmal darum, euch eure erstellten Dateien einmal anzuschauen und manuell damit zu arbeiten.
        // TODO 4.1 set correct filename
        let files = [
            "meshes/cube.ply"
        ];

        // TODO 4.2 write mesh loader
        readMesh(files, function(model) {
            console.log(model);
        });
        */

	initTriangle();
	renderTriangle();
};

function initTriangle() {

	// Specify geometry
	// 1. Add z coordinate for each vertex
	//TODO 1.2: Hier Position des Würfels anpassen
	//TODO 3.1: Hier eure eigenen Positionen einfügen

	positions = [
		-1, -1,  1, // 0
		1,  1,  1,  // 1
		-1,  1,  1, // 2
		1, -1,  1,  // 3
		1,  1, -1,  // 4
		1, -1, -1,  // 5
		-1, 1, -1, // 6
		-1, -1, -1, // 7
	];

	// define triangles counter-clockwise is best practice
	indices = [
		0, 1, 2,	// Front
		0, 3, 1,
		3, 4, 1,	// Right
		3, 5, 4,
		5, 6, 7,	// Back
		5, 4, 6,
		7, 2, 6,	// Left
		7, 0, 2,
		7, 3, 0,	// Bottom
		7, 5, 3,
		2, 4, 6,	// Top
		2, 1, 4
	]

	// TODO 1.1: Hier Farben des Würfels anpassen
	// TODO 3.2: Hier so viele Farben einfügen, wie euer Objekt braucht, beispielsweise mit einer Schleife oder manuell
	// targets positions vertices
	colors = [
		1, 0, 0, 1,  // Vertex 0: Red
		0, 1, 0, 1,  // Vertex 1: Green
		0, 0, 1, 1,  // Vertex 2: Blue
		1, 1, 0, 1,  // Vertex 3: Yellow
		1, 0, 1, 1,  // Vertex 4: Magenta
		0, 1, 1, 1,  // Vertex 5: Cyan
		0.5, 0.5, 0, 1,// Vertex 6: Brown
		1, 0.5, 0, 1   // Vertex 7: Orange
	];

	//TODO 2.2: Indices Array befüllen

	initTriangleBuffers();
}

function initTriangleBuffers() {

	// Create VBO for positions and activate it
	posVBO = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, posVBO);

	// Fill VBO with positions
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

	// Create indices VBO and activate it
	indVBO = gl.createBuffer()
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indVBO)

	// Fill VBO with indices
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW)

	// Create VBO for colors and activate it
	colorVBO = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, colorVBO);

	// Fill VBO with colors
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

	//TODO 2.3: VBO für Indices buffern, binden und befüllen
	// Tipp: Vorsicht, indices sind im Uint32Array Format
}

function renderTriangle() {

	// Link data in VBO to shader variables
	gl.bindBuffer(gl.ARRAY_BUFFER, posVBO);
	const posLoc = gl.getAttribLocation(program, "vPosition");
	gl.enableVertexAttribArray(posLoc);
	// 2. Change number of components per position to 3
	gl.vertexAttribPointer(posLoc, 3, gl.FLOAT, false, 0, 0);

	// Link data in VBO to shader variables
	gl.bindBuffer(gl.ARRAY_BUFFER, colorVBO);
	const colorLoc = gl.getAttribLocation(program, "vColor");
	gl.enableVertexAttribArray(colorLoc);
	gl.vertexAttribPointer(colorLoc, 4, gl.FLOAT, false, 0, 0);

	//TODO 2.4: VBO für Indices binden
	// Tipp: Indices verweisen nicht direkt auf ein Attribut, so wie Color oder Position; das heißt, wir brauchen hier keinen Attrib Pointer

	// Render
	// 3. Clear depth buffer before rendering
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	// 4. Match number of vertices to size of new positions array
	//TODO 2.5: die folgende Funktion anpassen, sodass sie die Indices nutzt:
	gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
}

window.onload = function () {
	main();
};

