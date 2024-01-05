import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const renderer = new THREE.WebGLRenderer({ antialias: true });
const scene = new THREE.Scene();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 150, 300);
camera.rotateX(-10 * Math.PI / 180);

const spotLight = new THREE.SpotLight(0xffffff, 3, 100, 0.22, 1);
spotLight.position.set(0, 25, 0);
scene.add(spotLight);

const loader = new GLTFLoader().setPath('public/matilda/');
loader.load('scene.gltf', (gltf) => {
  const mesh = gltf.scene;
  mesh.position.set(0, 1.05, -1);
  scene.add(mesh);
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();