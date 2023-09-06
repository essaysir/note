import React from 'react';
type Props = {
    params: {
        item : string;
    };
}

export default function page({params}:Props) {
    return (
        <div>
            <h1>{params.item} 설명 페이지 ! ! !</h1> 
        </div>
    );
}

