import Badge from "./_components/badge";
import Button from "./_components/button";
import Card from "./_components/card";

export default function CardPage() {
    return (
        <div className="flex gap-2 justify-center items-center text-gray-800 h-screen">
            <Card
              title="Web Design"
              description="web design friendly"
              type="Explore"
              color="blue"
            />
            <Card
              title="UI/UX Design"
              description="user-friendly interfaces"
              type="Explore"
              color="yellow"
            />
            <Card
              title="Digital Marketing"
              description="strategies for online growth"
              type="Learn"
              color="pink"
            />  
        </div>
    );
}