import { Canvas } from '@react-three/fiber';
import Box from '@/components/Three/Box';

function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-orange-100">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default Home;
