import React from "react";
import NewsCard from "./NewsCard";

const News = ({ title , news}) => {


  return (
    <div className="w-full flex flex-col mt-8 ">
      <h1 className="text-gray-500 text-center text-2xl">{title}</h1>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {news.map((newsContenet, idx) => (
              <NewsCard key={idx} {...newsContenet} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
