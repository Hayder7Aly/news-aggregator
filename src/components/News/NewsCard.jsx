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
          <a class="text-gray-400 inline-flex items-center md:mb-2 lg:mb-0 hover:underline" href={url ?? "https://biztoc.com/x/ad745dc66815683e"} target="_blank">
            Read More
          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
            </a>
            <p className="text-sm text-gray-500">{author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;


