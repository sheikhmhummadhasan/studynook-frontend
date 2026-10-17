import RoomsDetailcard from '@/Components/RoomsDetailcard';
import React from 'react';
import { cookies } from 'next/headers';

const RoomDetailPage = async ({ params }) => {
    console.log('RoomDetailPage rendered');

    const { id } = await params;

    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    console.log('Room ID:', id);

    const prom = await fetch(
        `http://localhost:5000/studynook/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            cache: 'no-store',
        }
    );

    console.log('API status:', prom.status);

    const res = await prom.json();

    return (
        <div>
            <RoomsDetailcard res={res} />
        </div>
    );
};

export default RoomDetailPage;