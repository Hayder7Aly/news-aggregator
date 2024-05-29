import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import News from "../components/News/News";

function Category() {
  const { category } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=ae71e127d3314614b0d5d11882a3b105`
      );
      const data = await response.json();
      setNews(data);
    };

    fetchData();
  }, [category]);

  return (
    <div>
      {news && (
        <News title={`News For Category ${category}`} news={news.articles} />
      )}
    </div>
  );
}

export default Category;
