import React from 'react'
import { SliderComp } from './SliderComp'
import PageContainer from './PageContainer'
import Collection from './Collection'
import HighQuality from './HighQuality'

const Home = () => {
    return (
        <div>
            <SliderComp />
            <PageContainer />
            <Collection/>
            <HighQuality/>
        </div>
    )
}

export default Home