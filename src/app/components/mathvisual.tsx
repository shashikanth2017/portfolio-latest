'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function Cubes() {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const count = 2200; // Increased count to fill the wider area

  const { positions, scales } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const scalesArray = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // DOUBLE WIDTH as requested
      const x = (Math.random() - 0.5) * 85;   // Doubled from 42
      const y = (Math.random() - 0.5) * 76;   // Doubled from 38
      const z = (Math.random() - 0.5) * 18;   // Increased depth

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      scalesArray[i] = 0.08 + Math.random() * 0.12;
    }
    return { positions: pos, scales: scalesArray };
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime() * 0.8;

    for (let i = 0; i < count; i++) {
      const x = positions[i * 3];
      const y = positions[i * 3 + 1];

      const dx = x * 0.55;
      const dy = y * 0.55;
      const distSq = dx * dx + dy * dy;

      const z = positions[i * 3 + 2] +
        distSq * Math.sin(time * 0.55 + x * 0.07 + y * 0.07) * 0.042;

      const matrix = new THREE.Matrix4()
        .makeTranslation(x, y, z)
        .scale(new THREE.Vector3(scales[i], scales[i], Math.max(0.35, scales[i] * 0.6)));

      meshRef.current.setMatrixAt(i, matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#ffffff"
        wireframe
        emissive="#1a1a1a"
        emissiveIntensity={0.22}
      />
    </instancedMesh>
  );
}

export default function MathBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{
          position: [0, 0, 58],   // Moved camera back
          fov: 42                 // Slightly wider FOV
        }}
        gl={{
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: true
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[20, 15, 40]} intensity={1.1} color="#ffffff" />
        <pointLight position={[-25, -20, -30]} intensity={0.5} color="#aaaaaa" />

        <Cubes />

        <Stars
          radius={800}
          depth={100}
          count={1400}
          factor={3}
          fade
          saturation={0}
        />
      </Canvas>
    </div>
  );
}