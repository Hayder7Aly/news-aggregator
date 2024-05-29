// SearchPage.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import News from '../components/News/News';

function SearchPage() {
    const [news, setNews] = useState(null)
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('q');
    const category = queryParams.get('category')
    const source = queryParams.get('sources')
    const from = queryParams.get('from')
    // console.log({searchQuery})
    // console.log(category, source, from , "hy")

    useEffect(() => {
  
        const getNews = async () => {

            let response;
            if(searchQuery){
                response = await fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2024-04-28&sortBy=publishedAt&apiKey=ae71e127d3314614b0d5d11882a3b105`)
            }else{
                response = await fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&category=${category}&from=${from}&sortBy=publishedAt&apiKey=ae71e127d3314614b0d5d11882a3b105`)
            }
            const data = await response.json()

            console.log({news})
            setNews(data)

        }



        getNews()

    },[searchQuery,category,source,from])


  return (
    <div>
      {news && <News news={news.articles} title={`Search for : ${searchQuery ?? `${source}, ${category} from Date`}`}/> }
      
      {/* Your search results component */}
    </div>
  );
}

export default SearchPage;
