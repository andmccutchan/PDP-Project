import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type HomePostCardProps = {
  images: Array<string>;
  profilePhoto: string;
};

const HomePostCard = ({ images, profilePhoto }: HomePostCardProps) => {
  return (
    <Card className="p-10">
      <CardHeader>
        <CardTitle>Hyprland Rice</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <Carousel>
            <CarouselContent>
              {images.map((_, index) => (
                <CarouselItem key={index}>
                  <img src={images[index]} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>
        </div>
      </CardContent>
      <CardFooter>
        <div>
          <Avatar>
            <AvatarImage src={profilePhoto} />
            <AvatarFallback />
          </Avatar>
        </div>
      </CardFooter>
    </Card>
  );
};

export default HomePostCard;
