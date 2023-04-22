import { useRef, useState } from "react";
import { useTexture } from "@react-three/drei";
import { Html } from "@react-three/drei";
import { OrbitControls, Sky } from "@react-three/drei";
import { Perf } from "r3f-perf";

export default function Experience() {
    const [currentImage, setCurrentImage] = useState(1);

    const images = ["/imagen1.jpg", "/imagen2.jpg"];

    const wallTexture = useTexture(images[currentImage]);

    const handleWallDoubleClick = () => {
        const nextImage = currentImage === 0 ? 1 : 0;
        setCurrentImage(nextImage);
    };

    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef();

    const handleVideoClick = () => {
        setIsPlaying(!isPlaying);
        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    };
    

    return (
        <>
            <Perf position="top-left" />
            <OrbitControls makeDefault />
            <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />
            <Sky />

            <mesh
                onDoubleClick={handleWallDoubleClick}
                position={[0, 0, -5]}
                rotation={[0, 0, 0]}
            >
                <boxGeometry args={[10, 5, 0.1]} />
                <meshStandardMaterial map={wallTexture} />
            </mesh>

            <mesh position={[0, 0, 5]} rotation={[0, 0, 0]}>
                <planeGeometry args={[10, 5, 0.1]} />
                <Html fullscreen rotation={[0,0,0]}>
                    <video
                        ref={videoRef}
                        src="/video.mp4"
                        
                        loop
                        onClick={handleVideoClick}
                        style={{ width: '100%', height: '100%' }}
                    />
                </Html>
            </mesh>

        </>
    );
}