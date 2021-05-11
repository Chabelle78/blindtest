import React from 'react';

export default function PopUp(){

    //if(win){
    return (
        <div className="w-full h-screen bg-black opacity-60">
            <div className="h-1/4 w-1/4 flex justify-center items-center">
                <p className="flex justify-center items-center">You Won !!</p>
            </div>
        </div>
    )
    //} else {

    return (
        <div className="w-full h-screen bg-black opacity-60">
        <div className="h-1/4 w-1/4 flex justify-center items-center">
            <p className="flex justify-center items-center">You Lose... !!</p>
        </div>
    </div>
    )
//  }
}