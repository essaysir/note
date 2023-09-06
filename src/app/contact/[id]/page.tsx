import React from 'react';
type Props = {
    params :{
        id : string; 
    }
}
export default function page({params}:Props) {
    // console.log(params); { id: 'sdfds' }
    return (
        <div>
            {params.id} Contact us !!
        </div>
    );
}
