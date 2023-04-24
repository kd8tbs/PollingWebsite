import React, { useEffect, useState } from "react";
import Featured from "./Featured";
import CategoryPolls from "./CategoryPolls";

function SectionManager({ handleModal }) {
  const [section, setSection] = useState(false); // false = featured, true = see more
  const [featuredPolls, setFeaturedPolls] = useState([]);

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

        let tempPolls = [
          { category: "Gaming", polls: gamingPolls },
          { category: "Movies", polls: moviePolls },
          { category: "TV", polls: tvPolls },
          { category: "Pop Culture", polls: pcPolls },
        ]

        setFeaturedPolls(tempPolls);
      } catch (err) {
        console.log(err.stack);
      } finally {
        console.log(featuredPolls)
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
