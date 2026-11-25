import * as THREE from 'three';

export interface SculptureInstance {
  group: THREE.Group;
  knotMesh: THREE.Mesh;
  innerMesh: THREE.Mesh;
  ring1: THREE.Mesh;
  ring2: THREE.Mesh;
  particles: THREE.Points;
  dispose: () => void;
}

/**
 * Creates the high-end Orpheus-inspired metallic 3D abstract sculpture.
 * Comprises a dark obsidian & molten gold Torus Knot, an inner golden icosahedron,
 * dual golden gyroscopic orbital rings, and an ambient gold stardust field.
 */
export function createAbstractSculpture(): SculptureInstance {
  const group = new THREE.Group();

  // 1. Primary Monolithic Torus Knot Geometry (Dark Obsidian & Molten Gold Reflection)
  const knotGeo = new THREE.TorusKnotGeometry(1.35, 0.42, 128, 32, 2, 3);
  const knotMat = new THREE.MeshStandardMaterial({
    color: 0x141418,
    roughness: 0.18,
    metalness: 0.95,
  });
  const knotMesh = new THREE.Mesh(knotGeo, knotMat);
  group.add(knotMesh);

  // 2. Inner Geometric Wireframe Core (Polished 24k Gold)
  const innerGeo = new THREE.IcosahedronGeometry(1.0, 1);
  const innerMat = new THREE.MeshStandardMaterial({
    color: 0xd4af37,
    emissive: 0x5a450e,
    emissiveIntensity: 0.45,
    wireframe: true,
    roughness: 0.25,
    metalness: 0.95,
  });
  const innerMesh = new THREE.Mesh(innerGeo, innerMat);
  group.add(innerMesh);

  // 3. Outer Gyroscopic Orbital Rings (Polished Gold & Subtle Cool Blue)
  const ring1Geo = new THREE.TorusGeometry(2.5, 0.022, 16, 120);
  const ring1Mat = new THREE.MeshStandardMaterial({
    color: 0xf5d77f,
    emissive: 0xd4af37,
    emissiveIntensity: 0.35,
    roughness: 0.2,
    metalness: 0.95,
  });
  const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
  ring1.rotation.x = Math.PI / 3;
  group.add(ring1);

  const ring2Geo = new THREE.TorusGeometry(2.85, 0.018, 16, 120);
  const ring2Mat = new THREE.MeshStandardMaterial({
    color: 0xc29b27,
    emissive: 0x8b6508,
    emissiveIntensity: 0.25,
    roughness: 0.25,
    metalness: 0.95,
  });
  const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
  ring2.rotation.x = -Math.PI / 4;
  ring2.rotation.y = Math.PI / 6;
  group.add(ring2);

  // 4. Ambient Gold Stardust Particle Field
  const particleCount = 120;
  const particlePositions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i += 3) {
    particlePositions[i] = (Math.random() - 0.5) * 12;
    particlePositions[i + 1] = (Math.random() - 0.5) * 12;
    particlePositions[i + 2] = (Math.random() - 0.5) * 8;
  }
  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
  const particleMat = new THREE.PointsMaterial({
    size: 0.045,
    color: 0xf5d77f,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending,
  });
  const particles = new THREE.Points(particleGeo, particleMat);

  const dispose = () => {
    knotGeo.dispose();
    knotMat.dispose();
    innerGeo.dispose();
    innerMat.dispose();
    ring1Geo.dispose();
    ring1Mat.dispose();
    ring2Geo.dispose();
    ring2Mat.dispose();
    particleGeo.dispose();
    particleMat.dispose();
  };

  return {
    group,
    knotMesh,
    innerMesh,
    ring1,
    ring2,
    particles,
    dispose,
  };
}

export default function AbstractSculpture() {
  return null;
}
