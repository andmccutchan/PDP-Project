import HomePostCard from "@/components/HomePostCard";
import LoginCard from "@/components/LoginCard";
import SignUpCard from "@/components/SignUpCard";

const riceImages = [
  {
    images: [
      "src/assets/rice1-1.png",
      "src/assets/rice1-2.png",
      "src/assets/rice1-3.png",
    ],
    profilePhoto: "src/assets/test-pfp.jpg",
    userName: "user-1",
  },
  {
    images: [
      "src/assets/rice2-1.png",
      "src/assets/rice2-2.png",
      "src/assets/rice2-3.png",
    ],
    profilePhoto: "src/assets/test-pfp.jpg",
    userName: "user-2",
  },
];

const Home = () => {
  return (
    <div className="container grid grid-cols-3 gap-4 mx-auto">
      {riceImages.map((_, index) => (
        <HomePostCard
          key={index}
          images={riceImages[index].images}
          profilePhoto={riceImages[index].profilePhoto}
        />
      ))}
    </div>
  );
};

export default Home;
