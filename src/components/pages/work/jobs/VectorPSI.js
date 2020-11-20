import React, { Component } from 'react'
import { vectorpsiV1 } from "../../../../utils/photos"
import PhotoGallery from '../../../misc/PhotoGallery'

export default class VectorPSI extends Component {
    render() {
        return (
            <div>
                <PhotoGallery photos={vectorpsiV1} title={"After screens"}/>
            </div>
        )
    }
}
