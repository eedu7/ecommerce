import AuthSideImage from "@/constants/images";
import Image from "next/image";
import React from "react";

/* 
    TODO: Form Scheme validation i,e username, email and password -> password must contain small and capital letters, numbers and punctuation.
*/

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <section className="w-screen h-screen max-w-7xl mx-auto">
            <div className="lg:grid grid-cols-2 h-full w-full">
                <div className="col-span-1 pt-24 md:pt-0 md:flex justify-center items-center h-full mx-2">
                    {children}
                </div>
                <div className="col-span-1 hidden lg:flex h-full w-full">
                    <Image
                        src={AuthSideImage}
                        alt="AuthSideImage"
                        title="Side Profile"
                    />
                </div>
            </div>
        </section>
    );
};

export default layout;
