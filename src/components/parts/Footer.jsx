import {social} from "../../pages/contact/Contact";
import React from "react";

export const mode = {
    DARK: {
        background: "bg-theme-gray-250",
    },
    LIGHT: {
        background: "bg-theme-gray-150",
    }
}

export function Footer({selectedMode}) {

    return (<div className={selectedMode.background + " text-theme-white-classic font-montserrat py-14"}>
            <hr className="mx-auto border-theme-white-classic bg-theme-white-classic border-1 w-80 rounded-full" />
            <h1 className="text-xl text-center mt-4 ">© 2021 - Développé par <a href={social.GITHUB} className="text-theme-yellow-F49F0A ">moi-même</a></h1>
            <div className="py-3 flex justify-center gap-x-4">
                {
                    Object.values(social).map(network =>
                        <a key={network.img} href={"" + network.link}>
                            <img
                                className={"transform hover:skew-y-12 transition duration-300"}
                                src={ network.img }
                                srcSet={ network.img }
                                alt=""
                                aria-valuetext="test"
                                width="30"
                                height="30"
                            />
                        </a>
                    )
                }
            </div>
        </div>
    );
}