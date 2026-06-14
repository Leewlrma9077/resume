import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function GoldDust({ count = 300 }) {
  const ref = useRef();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.mouse.y * 0.04;
      ref.current.rotation.y = state.mouse.x * 0.04;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.6;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#d4a853"
        sizeAttenuation
        transparent
        opacity={0.6}
        blending={2}
        depthWrite={false}
      />
    </points>
  );
}

function GoldOctahedron() {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.001;
      ref.current.rotation.y += 0.0015;
      ref.current.rotation.z += 0.0005;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.4;
    }
  });

  return (
    <mesh ref={ref} position={[3, 0, -4]}>
      <octahedronGeometry args={[1.2, 0]} />
      <meshBasicMaterial color="#d4a853" wireframe transparent opacity={0.1} />
    </mesh>
  );
}

function WarmGlow() {
  const ref = useRef();
  const count = 40;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.0004;
      ref.current.position.y += 0.002;
      if (ref.current.position.y > 3) ref.current.position.y = -4;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#e8c97a"
        sizeAttenuation
        transparent
        opacity={0.4}
        blending={2}
        depthWrite={false}
      />
    </points>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{
          background: 'radial-gradient(ellipse at 50% 40%, #1a150c 0%, #0d0b08 65%)',
        }}
      >
        <GoldDust count={300} />
        <GoldOctahedron />
        <WarmGlow />
      </Canvas>
    </div>
  );
}
