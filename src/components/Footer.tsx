const FooterComponent = () => {
    return <footer className="py-6 w-full bg-zinc-800 text-white">
        <div
            className="contain sm:flex justify-between items-center px-10 xl:w-[1100px] px-4 mx-auto"
        >
            <div>
                <p className="text-sm sm:text-left text-center">
                    © 2023, All Rights Reserved
                </p>
            </div>
            <div className="flex gap-5 items-center justify-between">
                <figure>
                    <a href="">
                        <img
                            src="https://simple-ecommece-project-using-js.netlify.app/assets/images/card/card.png"
                            className="w-[50px]"
                            alt="master card"
                        />
                    </a>
                </figure>
                <figure>
                    <a href=""
                    ><img
                        src="https://simple-ecommece-project-using-js.netlify.app/assets/images/card/paypal.png"
                        alt="paypal card"
                        className="w-[50px]"
                    /></a>
                </figure>
                <figure>
                    <a href=""
                    ><img
                        src="https://simple-ecommece-project-using-js.netlify.app/assets/images/card/visa.png"
                        alt="visa card"
                        className="w-[50px]"
                    /></a>
                </figure>
                <figure>
                    <a href="">
                        <img
                            src="https://simple-ecommece-project-using-js.netlify.app/assets/images/card/payment.png"
                            alt="western bank card"
                            className="w-[50px]"
                        />
                    </a>
                </figure>
            </div>
        </div>
    </footer>;
}
export default FooterComponent;