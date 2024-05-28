import GitCard from "./GitCard";
import GitCard2 from "./GitCard2";

const About = () => {
  return (
    <>
      <div className="flex-wrap items-center justify-center px-[25vw] py-[10vw] dark:bg-black dark:text-white">
        <h1 className="mb-10 dark:bg-black">About Us</h1>
        <div className="dark:bg-black">
          <p className="dark:bg-black">
            Welcome to CoinTrack, your premier destination for comprehensive
            crypto price tracking and analysis. At CoinTrack, we are dedicated
            to providing investors, traders, and enthusiasts with the essential
            tools and insights required to navigate the dynamic world of
            cryptocurrency markets effectively.
          </p>
          <br />
          <p className="dark:bg-black">
            Our platform boasts a user-friendly interface and real-time data
            feeds, ensuring you stay informed with the latest prices, market
            trends, and developments across a wide range of cryptocurrencies.
            Whether you're a seasoned investor or just starting out, CoinTrack
            offers valuable resources to assist you in making well-informed
            decisions and capitalizing on opportunities in the crypto space.
          </p>
          <br />
          <p className="dark:bg-black">
            Transparency and accessibility are core values at CoinTrack. Our
            platform provides detailed charts, historical data, and customizable
            alerts tailored to your trading strategy and investment objectives.
            Whether you're tracking Bitcoin, Ethereum, or the newest altcoins,
            CoinTrack equips you with everything you need to stay ahead of the
            curve.
          </p>
          <br />
          <p className="dark:bg-black">
            But CoinTrack is more than just a price tracking website. We're a
            vibrant community of crypto enthusiasts united by our shared passion
            for cryptocurrency and blockchain technology. Join us as we explore
            the boundless potential of decentralized finance, decentralized
            applications, and the future of money.
          </p>
          <br />
          <p className="dark:bg-black">
            Embark on your crypto journey with CoinTrack today and unlock the
            full potential of cryptocurrency markets. Together, we'll navigate
            the highs and lows, seize opportunities, and shape a brighter future
            driven by blockchain innovation. Welcome to CoinTrack, where the
            future of finance begins.
          </p>
        </div>
      </div>

      <GitCard />
      <GitCard2 />
    </>
  );
};

export default About;
