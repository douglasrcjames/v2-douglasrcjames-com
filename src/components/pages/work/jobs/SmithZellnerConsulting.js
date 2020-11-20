import React, { Component } from 'react'
import { smithZellnerV1 } from "../../../../utils/photos"
import PhotoGallery from '../../../../utils/misc'

export default class SmithZellnerConsulting extends Component {
    render() {
        return (
            <div>
                <div className="center-text">
                    <h3>Version 1</h3>
                </div>
                <PhotoGallery photos={smithZellnerV1} />
            </div>
        )
    }
}
