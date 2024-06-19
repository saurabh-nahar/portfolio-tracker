import React, { useEffect } from 'react';

const TwitterFeed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);
  }, []);

  return (
    <div className="container mx-auto p-4 dark:bg-black">
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg dark:bg-black">
        <a
          className="twitter-timeline dark:bg-black"
          data-theme="dark"
          href="https://twitter.com/CryptoTeluguO?ref_src=twsrc%5Etfw"
        >
          Tweets by CryptoTeluguO
        </a>
      </div>
    </div>
  );
};

export default TwitterFeed;
