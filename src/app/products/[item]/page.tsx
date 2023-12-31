import { notFound } from 'next/navigation';
import React from 'react';
type Props = {
    params: {
        item : string;
    };
}

export default function page({params}:Props) {
    if ( params.item === 'nothing' ) {
        notFound();
    }
    return (
        <div>
            <h1>{params.item} 설명 페이지 ! ! !</h1> 
        </div>
    );
}


export function generateStaticParams(){
    const products = ['pants','skirt'];
    return products.map((product)=>({
        itme: product
    }));
}