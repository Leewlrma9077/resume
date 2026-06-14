import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function StarField({ count = 500 }) {
  const ref = useRef();

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const siz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const r = 8 + Math.random() * 12;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      siz[i] = Math.random() * 2.5 + 0.5;
    }
    return [pos, siz];
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.mouse.y * 0.08;
      ref.current.rotation.y = state.mouse.x * 0.08;
      ref.current.rotation.z += 0.0003;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={count} array={sizes} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#4da8da"
        sizeAttenuation
        transparent
        opacity={0.7}
        blending={2}
        depthWrite={false}
      />
    </points>
  );
}

function WireframeShape() {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.0015;
      ref.current.rotation.y += 0.002;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.25) * 0.3;
    }
  });

  return (
    <mesh ref={ref} position={[3, 0.5, -3]}>
      <icosahedronGeometry args={[1.4, 1]} />
      <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.12} />
    </mesh>
  );
}

function FloatingParticles() {
  const ref = useRef();
  const count = 60;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.0005;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#06b6d4"
        sizeAttenuation
        transparent
        opacity={0.5}
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
        style={{ background: 'radial-gradient(ellipse at center, #0d1117 0%, #0a0a12 70%)' }}
      >
        <StarField count={400} />
        <WireframeShape />
        <FloatingParticles />
      </Canvas>
    </div>
  );
}
