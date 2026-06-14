import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function GoldRing() {
  const ring = useRef();

  useFrame((state) => {
    if (ring.current) {
      ring.current.rotation.x += 0.0008;
      ring.current.rotation.y += 0.0012;
      ring.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.08;
      ring.current.position.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.5;
    }
  });

  return (
    <mesh ref={ring} position={[0, 0, -3]}>
      <torusGeometry args={[2.8, 0.015, 16, 120]} />
      <meshBasicMaterial color="#c9a24e" transparent opacity={0.18} />
    </mesh>
  );
}

function InnerRing() {
  const ring = useRef();

  useFrame((state) => {
    if (ring.current) {
      ring.current.rotation.x -= 0.0006;
      ring.current.rotation.y -= 0.001;
      ring.current.position.y = Math.cos(state.clock.elapsedTime * 0.18) * 0.35;
    }
  });

  return (
    <mesh ref={ring} position={[0, 0, -2.5]}>
      <torusGeometry args={[2.1, 0.01, 16, 100]} />
      <meshBasicMaterial color="#e0c87d" transparent opacity={0.1} />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{
          background: 'radial-gradient(ellipse at 50% 45%, #18140c 0%, #0a0906 60%)',
        }}
      >
        <ambientLight intensity={0.5} />
        <GoldRing />
        <InnerRing />
      </Canvas>
    </div>
  );
}
