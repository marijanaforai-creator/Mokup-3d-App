// Kreiranje scene, kamere i renderera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas: document.getElementById("scene")});
renderer.setSize(window.innerWidth, window.innerHeight);

// Pravougaoni oblik kao magazin
const geometry = new THREE.BoxGeometry(3, 4, 0.2);

// Učitaj teksturu iz cover.jpg
const textureLoader = new THREE.TextureLoader();
const coverTexture = textureLoader.load('cover.jpg');
const material = new THREE.MeshBasicMaterial({map: coverTexture});

const magazine = new THREE.Mesh(geometry, material);
scene.add(magazine);

camera.position.z = 6;

// Animacija
function animate() {
    requestAnimationFrame(animate);
    magazine.rotation.y += 0.01; // rotacija oko Y ose
    renderer.render(scene, camera);
}
animate();
