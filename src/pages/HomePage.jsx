import React, { useState, useEffect } from "react";
import { PlayCircle, Church, BookOpen, HelpingHand } from "lucide-react";

const bgImages = [
  "/media/image1.1.JPG",
  "/media/image2.1.JPG",
  "/media/image3.1.JPG",
];

const QuickAccessCard = ({ icon: Icon, title, description, link }) => (
  <a href={link} className="block">
    <div className="card bg-white rounded-xl shadow-lg p-6 transition-all transform hover:scale-105">
      <div className="flex items-center space-x-4">
        <div className="bg-primary/10 p-3 rounded-full">
          <Icon className="text-primary text-2xl" />
        </div>
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  </a>
);

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex-grow pt-20">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {bgImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10"></div>

        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Welcome Home
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-slide-up">
            Join us in worship every Sunday as we celebrate God's love and grace
            together.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="#live"
              className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-secondary transition-all transform hover:scale-105 flex items-center"
            >
              <PlayCircle className="mr-2" /> Watch Live
            </a>
            <a
              href="test.html"
              className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Service Times
            </a>
          </div>
        </div>
      </section>

      <section className="relative -mt-20 z-30 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <QuickAccessCard
            icon={Church}
            title="New Here?"
            description="Learn what to expect"
            link="test.html"
          />
          <QuickAccessCard
            icon={HelpingHand}
            title="Get Involved"
            description="Join our ministries"
            link="test.html"
          />
          <QuickAccessCard
            icon={BookOpen}
            title="Prayer Request"
            description="Submit your request"
            link="test.html"
          />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
