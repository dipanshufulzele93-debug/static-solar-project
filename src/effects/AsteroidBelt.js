import * as THREE from 'three';

/**
 * High-performance GPU Instanced Asteroid Belt & Kuiper Belt
 */
export class AsteroidBelt {
  constructor(innerRadius = 205, outerRadius = 235, count = 2500, name = 'main_asteroid_belt') {
    this.group = new THREE.Group();
    this.group.name = name;

    const baseGeo = new THREE.DodecahedronGeometry(0.8, 1);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x757575,
      roughness: 0.9,
      metalness: 0.1
    });

    this.instancedMesh = new THREE.InstancedMesh(baseGeo, baseMat, count);
    this.instancedMesh.castShadow = true;
    this.instancedMesh.receiveShadow = true;

    this.asteroidData = [];
    const dummy = new THREE.Object3D();

    for (let i = 0; i < count; i++) {
      const radius = innerRadius + Math.random() * (outerRadius - innerRadius);
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 14;
      const scale = 0.3 + Math.random() * 0.9;
      const speed = (0.5 + Math.random() * 0.5) * 0.0003;
      const rotSpeedX = (Math.random() - 0.5) * 0.05;
      const rotSpeedY = (Math.random() - 0.5) * 0.05;

      this.asteroidData.push({
        radius,
        angle,
        height,
        scale,
        speed,
        rotSpeedX,
        rotSpeedY,
        rotX: Math.random() * Math.PI,
        rotY: Math.random() * Math.PI
      });

      dummy.position.set(Math.cos(angle) * radius, height, Math.sin(angle) * radius);
      dummy.scale.set(scale, scale * (0.8 + Math.random() * 0.4), scale);
      dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      dummy.updateMatrix();

      this.instancedMesh.setMatrixAt(i, dummy.matrix);
    }

    this.instancedMesh.instanceMatrix.needsUpdate = true;
    this.group.add(this.instancedMesh);
    this.dummy = dummy;
  }

  update(deltaSec) {
    if (!this.instancedMesh) return;

    for (let i = 0; i < this.asteroidData.length; i++) {
      const ast = this.asteroidData[i];
      ast.angle += ast.speed * deltaSec * 60;
      ast.rotX += ast.rotSpeedX;
      ast.rotY += ast.rotSpeedY;

      this.dummy.position.set(
        Math.cos(ast.angle) * ast.radius,
        ast.height,
        Math.sin(ast.angle) * ast.radius
      );
      this.dummy.scale.set(ast.scale, ast.scale, ast.scale);
      this.dummy.rotation.set(ast.rotX, ast.rotY, 0);
      this.dummy.updateMatrix();

      this.instancedMesh.setMatrixAt(i, this.dummy.matrix);
    }
    this.instancedMesh.instanceMatrix.needsUpdate = true;
  }
}

/**
 * Dynamic Comet with Ion & Dust Tails
 */
export class CometSystem {
  constructor(name, semiMajorAxis, eccentricity, periodDays, color = '#00e5ff') {
    this.group = new THREE.Group();
    this.group.name = `comet_${name}`;
    this.semiMajorAxis = semiMajorAxis;
    this.eccentricity = eccentricity;
    this.periodDays = periodDays;

    // Nucleus
    const nucleusGeo = new THREE.DodecahedronGeometry(1.2, 1);
    const nucleusMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.95 });
    this.nucleus = new THREE.Mesh(nucleusGeo, nucleusMat);
    this.group.add(this.nucleus);

    // Coma glow
    const comaGeo = new THREE.SphereGeometry(3.5, 16, 16);
    const comaMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    this.coma = new THREE.Mesh(comaGeo, comaMat);
    this.group.add(this.coma);

    // Tail (Cylinder pointing away from Sun)
    const tailGeo = new THREE.ConeGeometry(4.0, 45, 16, 1, true);
    tailGeo.translate(0, 22.5, 0);
    const tailMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide
    });
    this.tail = new THREE.Mesh(tailGeo, tailMat);
    this.group.add(this.tail);
  }

  update(pos) {
    this.group.position.copy(pos);
    // Tail points strictly away from origin (Sun)
    const dirAway = pos.clone().normalize();
    this.tail.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dirAway);

    const distToSun = pos.length();
    const tailIntensity = Math.max(0.1, Math.min(1.5, 200 / distToSun));
    this.tail.scale.set(tailIntensity, tailIntensity * 1.5, tailIntensity);
    this.coma.scale.setScalar(tailIntensity);
  }
}
