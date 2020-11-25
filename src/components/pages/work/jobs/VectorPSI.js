import React, { Component } from 'react'
import { vectorpsiV1 } from "../../../../utils/photos"
import ScreensGallery from '../../../misc/ScreensGallery'

export default class VectorPSI extends Component {
    render() {
        return (
            <div>
                <ScreensGallery photos={vectorpsiV1} title={"Screens"}/>
            </div>
        )
    }
}
