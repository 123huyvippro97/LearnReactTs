import React from "react";

interface ApiDataItem {
    name: string;
    image: string;
    price: string;
    href: string;
}

interface Day1Props {
    data: ApiDataItem[];
}
const Day1: React.FC<Day1Props> = ({ data }) => {
    console.log(data)
    // if (typeof data.callback === 'function' ){
    //     data.callback(Math.random())
    // }
    //prop truyen kieu du lieu gi cung duoc.  vd neu truyền function if (typeof props.callback == "function" ) -> kiem tra neu la function thi thuc thi lenh #
    /*code ben duoi su dụng fagment de in ra 2 the div ma ko can the div tong*/
    // return <React.Fragment></React.Fragment> //code bên dưới tưởng tương với dòng lệnh  fragment
    // return <>
    //     <div>
    //         123
    //     </div>
    //     <div>123</div>
    //     </>;
    return <div>
        {data.map((item, index)=> (
           <div key={index}>{item.name}</div>
        ))}
    </div>
}
export default Day1;