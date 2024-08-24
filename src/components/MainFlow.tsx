import React, {useEffect, useState} from 'react';
import Day1 from "./day1/Day1";

// Định nghĩa kiểu dữ liệu cho phản hồi API
interface ApiDataItem {
    name: string;
    image: string;
    price: string;
    href: string;
}

interface ApiResponse {
    errorCode: string;
    message: string;
    data: ApiDataItem[];
}

const MainFlow = () => {
    const [data, setData] = useState<ApiDataItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://api.mockfly.dev/mocks/5a7cad11-53bd-4808-aa41-730f0f4439a6/testAPI'
                );

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result: ApiResponse = await response.json();
                if (result.errorCode === '0') {
                    setData(result.data);
                } else {
                    setError(result.message);
                }
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    const test2 = [
        {
            "name" : "huy1",
            "age" : 27
        },{
            "name" : "huy1",
            "age" : 28
        },{
            "name" : "huy1",
            "age" : 29
        },
    ]
    const test3 = test2.map((item1, index) => (
        <Day1 data = {item1}></Day1>
    ));

    return <main className="px-4 py-12">

        {test2.map((item1, index) => (
            <Day1  data = {data}></Day1>
        ))}
        <div className="container xl:w-[1100px] mx-auto">
            <div className="items flex-wrap md:flex gap-4 space-y-6 md:space-y-0" id="product_items">
            {data.map((item, index) => (
                    <div  key={index}
                          className="flex-1 max-w-[350px] min-w-[280px] mx-auto item bg-[#f2f1ed] px-4 sm:pt-3 p-4 rounded-md flex flex-col-reverse sm:flex gap-3 items-center text-center text-xl">
                        <div className="">
                            <h2 className="py-1">price: {item.price}</h2>
                            <h2 className="py-4">{item.name}</h2>
                            <a href={item.href}
                               className="text-white  hover:bg-violet-600 bg-violet-500 px-3 py-2 rounded-md">shop
                                now</a>
                        </div>
                        <figure>
                            <img src={item.image} alt={item.name} className="w-[250px]"/>
                        </figure>
                    </div>
            ))}
            </div>
        </div>
    </main>;
}
export default MainFlow;