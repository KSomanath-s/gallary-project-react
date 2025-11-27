import React, { useState } from 'react'

const DataCard = ({ image }) => {

    const [loading, setLoading] = useState(true);
    const placeholderImage = "https://placehold.co/600x400";
    return (
        <>
            <div className='bg-white shadow-lg text-center rounded-lg w-56 h-56 text-black p-2 mb-2'>
                <h1 className='font-bold'>{image?.author}</h1>
                <img
                    src={loading ? placeholderImage : image?.download_url}
                    alt={image?.author}
                    onLoad={() => setLoading(false)}
                    className='w-26 h-26 object-cover py-2 rounded'
                />
                <a href={image?.url} className='bg-blue-500 text-white rounded py-1 px-4' target='_blank'>View Original</a>
            </div>
        </>
    )
}

export default DataCard