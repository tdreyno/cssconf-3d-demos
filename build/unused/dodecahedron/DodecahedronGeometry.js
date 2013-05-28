/**
 * @author ear / https://github.com/ear
 */

THREE.DodecahedronGeometry = function ( radius, detail ) {

    // http://en.wikipedia.org/wiki/Dodecahedron#Cartesian_coordinates

	var p = (1 + Math.sqrt(5))/2,
	    q = 1/p;

	var vs = [          //  x   y   z
        new THREE.Vector3(  0,  q,  p), //  0  green
        new THREE.Vector3(  0,  q, -p), //  1
        new THREE.Vector3(  0, -q,  p), //  2
        new THREE.Vector3(  0, -q, -p), //  3

        new THREE.Vector3(  p,  0,  q), //  4  pink
        new THREE.Vector3(  p,  0, -q), //  5
        new THREE.Vector3( -p,  0,  q), //  6
        new THREE.Vector3( -p,  0, -q), //  7

        new THREE.Vector3(  q,  p,  0), //  8  blue
        new THREE.Vector3(  q, -p,  0), //  9
        new THREE.Vector3( -q,  p,  0), // 10
        new THREE.Vector3( -q, -p,  0), // 11

        new THREE.Vector3(  1,  1,  1), // 12  orange
        new THREE.Vector3(  1,  1, -1), // 13
        new THREE.Vector3(  1, -1,  1), // 14
        new THREE.Vector3(  1, -1, -1), // 15
        new THREE.Vector3( -1,  1,  1), // 16
        new THREE.Vector3( -1,  1, -1), // 17
        new THREE.Vector3( -1, -1,  1), // 18
        new THREE.Vector3( -1, -1, -1)] // 19

    var faces = [
        [16,0,2,18,6],

        [16,10,8,12,0],
        [0,12,4,14,2],
        [2,14,9,11,18],
        [18,11,19,7,6],
        [6,7,17,10,16],

        [1,17,10,8,13],
        [13,8,12,4,5],
        [5,4,14,9,15],
        [15,9,11,19,3],
        [3,19,7,17,1],

        [1,13,5,15,3]
    ]

    var list = new Array();

    faces.forEach(function(indices) {
        var vertices = indices.map(function(i) { return (vs[i]); }),
            geometry = new THREE.ConvexGeometry(vertices),
            material = new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff, opacity: 0.4 }),
            mesh     = new THREE.Mesh(geometry, material);

        list.push(mesh);
    })

    return list;
};

THREE.DodecahedronGeometry.prototype = Object.create( THREE.Geometry.prototype );