import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '@/contexts/ThemeContext';

const FloatingCubes = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { theme } = useTheme();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
      groupRef.current.children.forEach((child, index) => {
        if (child instanceof THREE.Mesh) {
          child.position.y = Math.sin(state.clock.elapsedTime + index) * 0.3;
          child.rotation.x += 0.01;
          child.rotation.z += 0.005;
        }
      });
    }
  });

  const cubeColor = theme === 'dark' ? '#007BFF' : '#007BFF';
  const wireframeColor = theme === 'dark' ? '#00BFFF' : '#0066CC';

  return (
    <group ref={groupRef}>
      {/* Main central cube */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={cubeColor}
          wireframe
          emissive={cubeColor}
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Floating smaller cubes */}
      {Array.from({ length: 6 }).map((_, index) => {
        const angle = (index / 6) * Math.PI * 2;
        const radius = 2.5;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        return (
          <mesh key={index} position={[x, 0, z]} scale={0.3}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color={wireframeColor}
              wireframe
              emissive={wireframeColor}
              emissiveIntensity={0.1}
            />
          </mesh>
        );
      })}
      
      {/* Orbiting particles */}
      {Array.from({ length: 12 }).map((_, index) => {
        const angle = (index / 12) * Math.PI * 2;
        const radius = 4;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        return (
          <mesh key={`particle-${index}`} position={[x, 0, z]} scale={0.1}>
            <sphereGeometry args={[1, 8, 8]} />
            <meshStandardMaterial
              color={cubeColor}
              emissive={cubeColor}
              emissiveIntensity={0.5}
            />
          </mesh>
        );
      })}
    </group>
  );
};

const AboutAnimation = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight
          position={[5, 5, 5]}
          intensity={0.8}
          color="#007BFF"
        />
        <pointLight
          position={[-5, -5, -5]}
          intensity={0.4}
          color="#00BFFF"
        />
        <FloatingCubes />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
};

export default AboutAnimation;