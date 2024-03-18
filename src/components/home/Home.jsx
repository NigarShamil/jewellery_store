import React from 'react'
import { SliderComp } from './SliderComp'
import PageContainer from './PageContainer'
import Collection from './Collection'
import HighQuality from './HighQuality'
import NewArrival from '../ProductsDesign/NewArrival'
import BestSeller from '../ProductsDesign/BestSeller'
import Content from '../Contents/Content'

const Home = () => {
    return (
        <div>
            <SliderComp />
            <PageContainer />
            <Collection />
            <NewArrival />
            <BestSeller />
            <HighQuality />
            <Content />
        </div>
    )
}

export default Home