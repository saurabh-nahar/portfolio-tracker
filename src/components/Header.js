const Header = () => {
    return(
        <>
        <div className="flex align-middle justify-between py-[1vh]">
            <div>
                <img className=" w-[3vw]" src="https://static.vecteezy.com/system/resources/previews/018/745/974/original/bitcoin-cryptocurrency-in-pixel-art-style-illustration-free-png.png"></img>
            </div>
            <ul className="list-none flex justify-around px-[2vw]">
                <li className="px-[2vw]">About</li>
                <li className="px-[2vw]">Contact Us</li>
            </ul>
        </div>
        <hr className="w-[100vw] border-orange-300"></hr>
        </>
    )
}

export default Header;