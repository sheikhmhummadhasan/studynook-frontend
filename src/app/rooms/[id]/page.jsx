import RoomsDetailcard from '@/Components/RoomsDetailcard';
import React from 'react';

const RoomDetailPage = async ({params}) => {
    const {id} = await params
    const prom = await fetch(`https://study-nook-backend-tau.vercel.app/studynook/${id}`);
    const res = await prom.json()
    // console.log(id, res)
    return (
        <div>
            <RoomsDetailcard res={res} />
        </div>
    );
};

export default RoomDetailPage;