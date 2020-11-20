import React, { Component } from 'react'
import { smithzellnerV1, smithzellnerV2 } from "../../../../utils/photos"
import PhotoGallery from '../../../misc/PhotoGallery'

export default class SmithZellnerConsulting extends Component {
    render() {
        return (
            <div>
                <PhotoGallery photos={smithzellnerV1} title={"Before screens"}/>
                <PhotoGallery photos={smithzellnerV2} title={"After screens"}/>
            </div>
        )
    }
}
