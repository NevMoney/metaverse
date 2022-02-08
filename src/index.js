import keyInput from './keyInput.js'
import connect from './Connect.js'

connect.then(() => {
  console.log('waiting')
})

const ratio = window.innerWidth / window.innerHeight

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, ratio, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// generate light
const light = new THREE.AmbientLight(0x404040)
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
light.add(directionalLight)
scene.add(light)

// generate plane
const geometry = new THREE.BoxGeometry(50, 0.1, 50)
const material = new THREE.MeshPhongMaterial({ color: 0xffffff })
const ground = new THREE.Mesh(geometry, material)

scene.add(ground)
camera.position.set(5, 15, 15)

const boxGeometry = new THREE.BoxGeometry(2, 2, 2)
const boxMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 })
const box = new THREE.Mesh(boxGeometry, boxMaterial)
box.position.set(-2, 0, 8)

scene.add(box)

// add animation - this is animation loop
function animate() {
  requestAnimationFrame(animate)
  if (keyInput.isPressed(38)) {
    camera.position.y += 0.05
    camera.position.x += 0.05
  }
  if (keyInput.isPressed(40)) {
    camera.position.y -= 0.05
    camera.position.x -= 0.05
  }
  camera.lookAt(scene.position)
  renderer.render(scene, camera)
}
animate()
