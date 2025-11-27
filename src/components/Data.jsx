import axios from 'axios'
import React, { useState } from 'react'
import DataCard from './DataCard';

const Data = () => {

    const [userData, setUserData] = useState([]);

    const getData = async () => {
        const response = await axios.get('https://picsum.photos/v2/list');
        setUserData(response.data)
    }

    return (
        <>
            {/* Button */}
            <div className='flex justify-center items-center py-3'>
                <button
                    onClick={getData}
                    className='bg-green-600 px-5 py-2 rounded-lg text-white'
                >Get Data</button>
            </div>
            {/*  */}

            <div className='grid grid-cols-6 gap-3 py-4'>

                {
                    userData.length > 0 ? (
                        userData.map((curEle) => (
                            <DataCard image={curEle} key={curEle.id} />
                        ))
                    ) : (
                        <>
                            <div className='col-span-6 flex justify-center'>
                                <p className='text-center font-bold text-black'>No Data Available</p>
                            </div>
                        </>
                    )
                }

            </div>

        </>
    )
}

export default Data