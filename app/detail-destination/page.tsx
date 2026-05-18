import Destination from "./components/destination";
import Schedule from "./components/schedule";
import Card from "./components/card";

export default function DetailDestinationPage() {
    return (
        <div className="bg-white min-h-screen p-6 flex flex-col gap-4">
            <Destination />
            <Schedule />
            <Card />
        </div>
    );
}