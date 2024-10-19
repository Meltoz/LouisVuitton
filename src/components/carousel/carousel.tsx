"use client";
import React, {useState} from "react";


interface Item {
    name: string;
    src: string;
    description: string;
}

interface Tab {
    name: string;
    active: boolean;
    item: Item
}

interface TabProps {
    data: Tab[];
}

export const Carousel: React.FC<TabProps> = ({data}) => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="w-full h-[130vh] relative">
            <div className="absolute top-[10%] left-1/2 -translate-x-1/2">
                <div className="flex justify-center space-x-4 p-4 pb-0 border-b border-gray-300">
                    {data.map((tab, index) => (
                        <button
                            key={index}
                            className={`py-2 px-4 ${
                                activeTab === index
                                    ? 'border-b-2 border-whiteMedium text-whiteMedium'
                                    : 'text-gray-500'
                            }`}
                            onClick={() => setActiveTab(index)}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <div
                    className="w-full h-full flex flex-col items-center justify-center bg-cover bg-center"
                    style={{backgroundImage: `url(${data[activeTab].item.src})`}}
                >
                    <div className=" text-white p-8 text-center relative top-[33%]">
                        <h3 className="text-4xl">{data[activeTab].item.name}</h3>
                        <p className="mt-4 text-xl">{data[activeTab].item.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}