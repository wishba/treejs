import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const renderer = new THREE.WebGLRenderer({ antialias: true });
const scene = new THREE.Scene();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 300);

const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

const loader = new GLTFLoader().setPath('public/box-Mesh/');
loader.load('box-Mesh 759986.gltf', (gltf) => {
  const mesh = gltf.scene;
  scene.add(mesh);
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();