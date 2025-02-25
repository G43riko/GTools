import PointsGeneration from "./(_islands)/points-generation.tsx";
import WaterGeneration from "./(_islands)/water-generation.tsx";

export default function WorldGenerator() {
    return (
        <div class="flex flex-col container mx-auto my-2">
            <PointsGeneration />
            <WaterGeneration />
        </div>
    );
}
