{
  /* <script> */
}
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerWidth,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerWidth);
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", function () {
  var width = window.innerWidth;
  var height = window.innerWidth;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

controls = new THREE.OrbitControls(camera, renderer.domElement);

//create the shape
var geometry = new THREE.BoxGeometry(1.2, 1.2, 1.2);
var cubeMaterials = [
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("img/Chol&Ryueae.png"),
    side: THREE.DoubleSide, //Right Side
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("img/Chol.png"),
    side: THREE.DoubleSide, //Left Side
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("img/eis.png"),
    side: THREE.DoubleSide, //Top Side
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("img/mcrc.png"),
    side: THREE.DoubleSide, //Bottom Side
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("img/Ryueae.png"),
    side: THREE.DoubleSide, //Front Side
  }),
  new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide, //Back Side
  }),
];

//create a amterial, color, or image texture
var material = new THREE.MeshFaceMaterial(cubeMaterials);
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 3;

// controls = new THREE.OrbitControls(camera, renderer.domElement);

// camera.position.z = 3;

// //create the shape
// //var geometry = new THREE.BoxGeometry(1.2, 1.2, 1.2);
// var geometry = new THREE.BoxGeometry(1000, 1000, 1000);
// var cubeMaterials = [
//   new THREE.MeshBasicMaterial({
//     map: new THREE.TextureLoader().load("img/px.jpg"), //
//     side: THREE.DoubleSide, //Right Side
//   }),
//   new THREE.MeshBasicMaterial({
//     map: new THREE.TextureLoader().load("img/nx.jpg"), //ok
//     side: THREE.DoubleSide, //Left Side
//   }),
//   new THREE.MeshBasicMaterial({
//     map: new THREE.TextureLoader().load("img/py.jpg"), //ok
//     side: THREE.DoubleSide, //Top Side
//   }),
//   new THREE.MeshBasicMaterial({
//     map: new THREE.TextureLoader().load("img/ny.jpg"), //
//     side: THREE.DoubleSide, //Bottom Side
//   }),
//   new THREE.MeshBasicMaterial({
//     map: new THREE.TextureLoader().load("img/pz.jpg"), //
//     side: THREE.DoubleSide, //Front Side
//   }),
//   new THREE.MeshBasicMaterial({
//     map: new THREE.TextureLoader().load("img/nz.jpg"), //
//     side: THREE.DoubleSide, //Back Side
//   }),
// ];

//create a material, color, or image texture
var cubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials);
var cube = new THREE.Mesh(geometry, cubeMaterial);
scene.add(cube);

// var ambientLight = new THREE.ambientLight(0xffffff, 0.3);
// scene.add(ambientLight);

//Game logic
var update = function () {
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.005;
};

//Draw scene
var render = function () {
  renderer.render(scene, camera);
};

//run game loop(update, render, repeate)
var GameLoop = function () {
  requestAnimationFrame(GameLoop);
  update();
  render();
};
GameLoop();
// </script>
