import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '@/contexts/ThemeContext';

const Icosahedron = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { theme } = useTheme();

  useFrame((state) => {
    if (meshRef.current) {
      if (hovered) {
        // Follow mouse when hovered
        meshRef.current.rotation.x = state.mouse.y * 0.5;
        meshRef.current.rotation.y = state.mouse.x * 0.5;
      } else {
        // Auto rotation when not hovered
        meshRef.current.rotation.x += 0.005;
        meshRef.current.rotation.y += 0.01;
      }
    }
  });

  const wireframeColor = theme === 'dark' ? '#007BFF' : '#007BFF';
  const glowColor = theme === 'dark' ? '#007BFF' : '#007BFF';

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1}
    >
      <icosahedronGeometry args={[2, 0]} />
      <meshStandardMaterial
        color={wireframeColor}
        wireframe
        emissive={glowColor}
        emissiveIntensity={0.1}
      />
    </mesh>
  );
};

const Scene3D = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight
          position={[10, 10, 10]}
          intensity={0.8}
          color="#007BFF"
        />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.4}
          color="#007BFF"
        />
        <Icosahedron />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;