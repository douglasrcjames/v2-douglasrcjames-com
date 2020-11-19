import React, { Component } from 'react'
import { smithZellnerV1 } from "../../../../utils/photos"
import PhotoGallery from '../../../misc/PhotoGallery/PhotoGallery'

export default class SmithZellnerConsulting extends Component {
    render() {
        return (
            <div>
                <p>Screenshots and demo coming soon!</p>
                <PhotoGallery photos={smithZellnerV1} />
            </div>
        )
    }
}
