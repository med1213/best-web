import React from 'react'
import List_X from './elements/List_X';
import List_Y from './elements/List_Y';

export default function Out_team_dev() {

    return (
        <div className="container max-w-7xl px-4">
            <div data-aos="fade-up" className="flex flex-wrap justify-center text-center mb-10">
                <div className="w-full lg:w-screen px-4">
                    <h1 className="dark:text-white text-gray-900 text-4xl font-bold mb-8">
                        Developer Teams
                    </h1>
                </div>
            </div>
            <div className="md:hidden inline">
                <List_Y />
            </div>
            <div className="md:inline hidden">
                <List_X/>
            </div>
        </div>
    )
}
