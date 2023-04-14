import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Box() {
    const PATH = "/static/textures/sphere/"
    
    const props = useTexture({
        map: PATH + "color.jpg",
        metallicMap: PATH + 'metallic.jpg',
        normalMap: PATH + 'normal.jpg',
        occMap: PATH + 'occ.jpg',
        specMap: PATH + 'spec.jpg',
        height: PATH + 'height.png',
        opacity: PATH + 'opacity.jpg',
        rou: PATH+ 'rou.jpg'
    })

    return (
        <mesh castShadow={true}  rotation-y={Math.PI / 12}>
            <boxGeometry args={[2, 3]} />
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    )
}