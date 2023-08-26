import React from 'react'

import img1 from '../../images/one.jpg'
import img2 from '../../images/two.jpg'
import img3 from '../../images/three.jpg'
import HeadLine from './HeadLine'
import ExploreCard from './ExploreCard'

export default function ExploreProducts() {
    return (
        <div>
            <HeadLine text="Explore Products" />
            <div class="container"  style={{marginTop: 0}}>
                <div class="row row-cols-3 row-cols-lg-4 g-2 g-lg-3">
                    <ExploreCard />
                    <ExploreCard />
                    <ExploreCard />
                    <ExploreCard />
                </div>
            </div>
        </div>
    )
}
