const HeaderComponent = () => {
    return <header className="bg-zinc-50 py-4 border-b">
        <div
            className="container xl:w-[1100px] mx-auto flex justify-between items-center px-4"
        >
            {/* logo */}
            <a href="#"
            ><span className="sm:text-[2rem] text-[1.5rem] font-bold">STORE</span></a
            >
            {/*  menu  */}
            <nav className="flex justify-between items-center">
                <ul className="flex gap-4 font-semibold sm:text-[17px]">
                    <li>
                        <a
                            href="/"
                            className="text-white hover:bg-[#3b3b5f] py-2 px-3 rounded-md hover:text-white bg-[#3b3b5f]"
                        >Home</a
                        >
                    </li>
                    <li>
                        <a
                            href="/shop.html"
                            className="hover:bg-[#3b3b5f] py-2 px-3 rounded-md hover:text-white"
                        >Shop</a
                        >
                    </li>
                    <li>
                        <a
                            href="/card.html"
                            className="hover:bg-[#3b3b5f] py-2 px-3 rounded-md hover:text-white"
                        >Card</a
                        >
                    </li>
                </ul>
            </nav>
        </div>
    </header>;
}
export default HeaderComponent;