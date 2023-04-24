import React, { useEffect, useState } from "react";
import Featured from "./Featured";
import CategoryPolls from "./CategoryPolls";

function SectionManager({ handleModal }) {
  const [section, setSection] = useState(false); // false = featured, true = see more

  const featuredPolls = [
    { category: "Gaming", polls: [{}] },
    { category: "Movies", polls: [{}] },
    { category: "TV", polls: [{}] },
    { category: "Pop Culture", polls: [{}] },
  ];

  useEffect(() => {
    const fetchFeaturedPolls = async () => {
      try {
        let response = await fetch(
          "http://localhost:3000/polls?category=Gaming&_sort=likes&_order=asc"
        );
        const gamingPolls = await response.json();
        response = await fetch(
          "http://localhost:3000/polls?category=Movies&_sort=likes&_order=asc"
        );
        const moviePolls = await response.json();
        response = await fetch(
          "http://localhost:3000/polls?category=TV&_sort=likes&_order=asc"
        );
        const tvPolls = await response.json();
        response = await fetch(
          "http://localhost:3000/polls?category=Pop Culture&_sort=likes&_order=asc"
        );
        const pcPolls = await response.json();

        featuredPolls[0].polls = gamingPolls;
        featuredPolls[1].polls = moviePolls;
        featuredPolls[2].polls = tvPolls;
        featuredPolls[3].polls = pcPolls;
      } catch (err) {
        console.log(err.stack);
      } finally {
      }
    };

    (async () => await fetchFeaturedPolls())();
  }, []);

  function handleSection() {
    setSection(!section);
  }

  return (
    <div className="featuredContainer">
      <div className="featuredContent">
        {!section && (
          <Featured
            handleModal={handleModal}
            featuredPolls={featuredPolls}
            handleSection={handleSection}
          />
        )}
        {section && (
          <CategoryPolls
            handleModal={handleModal}
            featuredPolls={featuredPolls}
            handleSection={handleSection}
          />
        )}
      </div>
    </div>
  );
}

export default SectionManager;
