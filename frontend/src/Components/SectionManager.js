import React, { useEffect, useReducer, useState } from "react";
import Featured from "./Featured";
import CategoryPolls from "./CategoryPolls";

function SectionManager({ handleModal }) {
  const [section, setSection] = useState(false); // false = featured, true = see more
  const [featuredPolls, setFeaturedPolls] = useState([]);
  const [categoryPolls, setCategoryPolls] = useState([{category: ""}, {polls: ""}]);

  useEffect(() => {
    const fetchFeaturedPolls = async () => {
      try {
        let response = await fetch(
          "http://localhost:3000/polls?category=Gaming&_limit=6&_sort=likes&_order=desc"
        );
        const gamingPolls = await response.json();
        response = await fetch(
          "http://localhost:3000/polls?category=Movies&_limit=6&_sort=likes&_order=desc"
        );
        const moviePolls = await response.json();
        response = await fetch(
          "http://localhost:3000/polls?category=TV&_limit=6&_sort=likes&_order=desc"
        );
        const tvPolls = await response.json();
        response = await fetch(
          "http://localhost:3000/polls?category=Pop Culture&_limit=6&_sort=likes&_order=desc"
        );
        const pcPolls = await response.json();

        let tempPolls = [
          { category: "Gaming", polls: gamingPolls },
          { category: "Movies", polls: moviePolls },
          { category: "TV", polls: tvPolls },
          { category: "Pop Culture", polls: pcPolls },
        ];

        setFeaturedPolls(tempPolls);
      } catch (err) {
        console.log(err.stack);
      }
    };

    (async () => await fetchFeaturedPolls())();
  }, []);

  // useEffect(() => console.log(categoryPolls), [categoryPolls]);

  async function handleSection(category) {
    try {
      if (!section) {
        const response = await fetch(
          "http://localhost:3000/polls?category=" +
            category +
            "&_sort=likes&_order=desc"
        );
        const polls = await response.json();
        let temp = {category: category, polls: polls};
        setCategoryPolls(temp);
      }
    } catch (err) {
      console.log(err.message);
    }
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
            categoryPolls={categoryPolls}
            handleSection={handleSection}
          />
        )}
      </div>
    </div>
  );
}

export default SectionManager;
