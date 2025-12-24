import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Cone, Cylinder } from "@react-three/drei";

export default function Home() {
    return (
        <Canvas camera={{ position: [0, 2, 5], fov: 50 }} style={{ width: "100vw", height: "100vh" }}>
            {/* Işıklar */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 5]} intensity={1} />

            {/* Çiçek gövdesi */}
            <Cylinder args={[0.05, 0.1, 2, 32]} position={[0, 1, 0]}>
                <meshStandardMaterial color="green" />
            </Cylinder>

            {/* Çiçek yaprakları */}
            <Cone args={[0.5, 1, 32]} position={[0, 2, 0]}>
                <meshStandardMaterial color="pink" />
            </Cone>
            <Cone args={[0.4, 0.8, 32]} position={[0, 2.3, 0]}>
                <meshStandardMaterial color="red" />
            </Cone>

            {/* Çiçek merkezi */}
            <Sphere args={[0.2, 32, 32]} position={[0, 2.5, 0]}>
                <meshStandardMaterial color="yellow" />
            </Sphere>

            <OrbitControls />
        </Canvas>
    );
}
