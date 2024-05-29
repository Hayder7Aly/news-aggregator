import React from "react";

const NewsCard = ({
  title,
  description,
  urlToImage,
  author,
  category,
  url
}) => {
  return (
    <div className={`p-4 md:w-1/3`}>
      <div className="h-auto border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="h-72  w-full object-cover "
          src={urlToImage ?? "https://answers-afd.microsoft.com/static/images/image-not-found.jpg"}
          alt="news"
        />

        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {category}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3 cursor-pointer hover:underline hover:text-gray-500">
            <a href={url ?? "https://biztoc.com/x/ad745dc66815683e"} target="_blank">
              
            {title}
            </a>
          </h1>
          <p className="leading-relaxed mb-3">{description}</p>
          <div className="flex items-center justify-between ">
          <a href={url ?? "https://biztoc.com/x/ad745dc66815683e"} target="_blank">
            <button
              type="button"
              className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >

              Read More
            </button>
            </a>
            <p className="text-sm text-gray-500">{author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;


