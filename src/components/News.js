import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { NEWS_ENDPOINT } from "../utils/constants";

const News = () => {
    const [cryptoNews, setCryptoNews] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(NEWS_ENDPOINT + process.env.NEWS_ARTICLES);
                const json = await response.json();
                setCryptoNews(json.articles);
                console.log(cryptoNews);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    if (!cryptoNews) {
        return <h1 className="dark:bg-black">Loading...</h1>;
    } else {
        return (
            <div className="flex flex-wrap justify-center dark:bg-black">
                {cryptoNews.map((newsItem, index) => (
                    <a href={newsItem.url} target="_blank" rel="noopener noreferrer">
                    <div key={index} className="p-4 m-4 flex justify-end dark:bg-black">
                        {newsItem.urlToImage && <img className="w-64 dark:bg-black" src={newsItem.urlToImage} alt={newsItem.title} />}
                        <div className="p-2 m-2 dark:bg-black">
                            <h1 className="truncate w-[60vw] dark:bg-black">{newsItem.title}</h1>
                            <p className="truncate w-[60vw] my-2 dark:bg-black">{newsItem.description}</p>
                            <h1 className="my-6 dark:bg-black">- {newsItem.source.name}</h1>
                        </div>
                    </div>
                    </a>
                ))}
            </div>
        );
    }
}

export default News;
