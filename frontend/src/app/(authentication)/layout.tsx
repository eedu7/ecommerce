import ShoppingBags from "@/lib/images";
import Image from "next/image";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <section className="w-screen h-screen max-w-7xl mx-auto">
            <div className="lg:grid grid-cols-2 border h-full w-full">
                <div className="col-span-1 pt-24 md:pt-0 md:flex justify-center items-center h-full mx-2">
                    {children}
                </div>
                <div className="col-span-1 hidden lg:flex">
                    <Image
                        src={ShoppingBags}
                        alt="An image of two people of opposite gender holding bags of shopping"
                    />
                </div>
            </div>
        </section>
    );
};

export default layout;
