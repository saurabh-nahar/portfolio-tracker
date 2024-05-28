const Subscription = () => {
  return (
    <div>
      <h1 className="text-center py-12 text-3xl dark:bg-black">Subscription</h1>
      <div className="flex justify-around dark:bg-black">
        <div className="rounded-md border border-black w-96 p-4 dark:bg-black dark:border-white">
          <h2 className="text-center dark:bg-black text-xl">Beginner</h2>
          <h4 className="text-center p-4 dark:bg-black text-lg">$29/yr</h4>
          <ul>
            <li className="py-2 dark:bg-black">✅ Centralized Exchanges</li>
            <li className="py-2 dark:bg-black">✅ Eth & Sol Chain Support</li>
            <li className="py-2 dark:bg-black">❌ Priority Support</li>
            <li className="py-2 dark:bg-black">❌ NFT Support</li>
            <li className="py-2 dark:bg-black">❌ Unlimited Wallet Support</li>
          </ul>
          <div className="text-center py-6 dark:bg-black">
            <button className=" text-center bg-orange-400 hover:bg-black hover:text-orange-400  text-white font-bold py-2 px-4 rounded w-28 dark:hover:bg-white">
              Buy
            </button>
          </div>
        </div>
        <div className="rounded-md border border-black w-96 p-4 dark:bg-black dark:border-white">
          <h2 className="text-center dark:bg-black text-xl">Advanced</h2>
          <h4 className="text-center p-4 dark:bg-black text-lg">$49/yr</h4>
          <ul>
            <li className="py-2 dark:bg-black">✅ Centralized Exchanges</li>
            <li className="py-2 dark:bg-black">✅ Eth & Sol Chain Support</li>
            <li className="py-2 dark:bg-black">✅ Priority Support</li>
            <li className="py-2 dark:bg-black">✅ NFT Support</li>
            <li className="py-2 dark:bg-black">❌ Unlimited Wallet Support</li>
          </ul>
          <div className="text-center py-6 dark:bg-black">
            <button className=" text-center bg-orange-400 hover:bg-black hover:text-orange-400  text-white font-bold py-2 px-4 rounded w-28 dark:hover:bg-white">
              Buy
            </button>
          </div>
        </div>
        <div className="rounded-md border border-black w-96 p-4 dark:bg-black dark:border-white">
          <h2 className="text-center dark:bg-black text-xl">Pro</h2>
          <h4 className="text-center p-4 dark:bg-black text-lg">$99/yr</h4>
          <ul>
            <li className="py-2 dark:bg-black">✅ Centralized Exchanges</li>
            <li className="py-2 dark:bg-black">✅ Eth & Sol Chain Support</li>
            <li className="py-2 dark:bg-black">✅ Priority Support</li>
            <li className="py-2 dark:bg-black">✅ NFT Support</li>
            <li className="py-2 dark:bg-black">✅ Unlimited Wallet Support</li>
          </ul>
          <div className="text-center py-6 dark:bg-black">
            <button className=" text-center bg-orange-400 hover:bg-black hover:text-orange-400  text-white font-bold py-2 px-4 rounded w-28 dark:hover:bg-white">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
