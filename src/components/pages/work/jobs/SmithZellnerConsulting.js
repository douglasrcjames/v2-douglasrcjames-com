import React, { Component } from 'react'
import { smithzellnerV1, smithzellnerV2 } from "../../../../utils/photos"
import ScreensGallery from '../../../misc/ScreensGallery'

export default class SmithZellnerConsulting extends Component {
    render() {
        return (
            <div>
                <ScreensGallery photos={smithzellnerV1} title={"Before screens"}/>
                <ScreensGallery photos={smithzellnerV2} title={"After screens"}/>
            </div>
        )
    }
}
