'use client'

import React from 'react'
import ReactPlayer from 'react-player'

// Render a YouTube video player


const page = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <ReactPlayer
                url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
                controls
            />

        </main>
    )
}

export default page