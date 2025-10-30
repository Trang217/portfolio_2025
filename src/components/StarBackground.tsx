import { useEffect, useState, type JSX } from "react";

interface Star {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  animationDuration: number;
}

interface Meteor {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  animationDuration: number;
}

function StarBackground(): JSX.Element {
  const [stars, setStars] = useState<Star[]>([]);
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  const generateStars = () => {
    const numberOfStars =
      Math.floor(window.innerWidth * window.innerHeight) / 10000;
    const newStars: Star[] = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 1,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors: Meteor[] = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  useEffect(() => {
    generateStars();
    generateMeteors();
  }, []);
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => {
        const { id, size, x, y, opacity, animationDuration } = star;
        return (
          <div
            className="star absolute animate-pulse-subtle"
            style={{
              width: size + "px",
              height: size + "px",
              left: x + "%",
              top: y + "%",
              opacity: opacity,
              animationDuration: animationDuration + "s",
            }}
            key={id}
          ></div>
        );
      })}

      {meteors.map((meteor) => {
        const { id, size, x, y, delay, animationDuration } = meteor;
        return (
          <div
            style={{
              width: size * 50 + "px",
              height: size * 2 + "px",
              left: x + "%",
              top: y + "%",
              animationDelay: delay + "s",
              animationDuration: animationDuration + "s",
            }}
            className="meteor animate-meteor"
            key={id}
          ></div>
        );
      })}
    </div>
  );
}

export default StarBackground;
