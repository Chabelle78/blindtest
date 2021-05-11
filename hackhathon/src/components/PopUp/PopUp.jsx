import React from 'react';

export default function PopUp(){

    return (
        <div className="w-full h-screen bg-black bg-opacity-60 flex-col justify-center items-center">
            <div className="h-1/4 w-1/4 flex justify-center items-center">
                <p className="flex justify-center items-center">You Won !!</p>
            </div>
            <button>Ok !</button>
        </div>
    )

}