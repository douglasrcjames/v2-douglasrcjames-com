import React, { Component } from 'react'
import { paloAltoNetworks } from '../../../../utils/photos'
import PhotoGallery from '../../../misc/PhotoGallery'

export default class PaloAltoNetworks extends Component {
    render() {
        return (
            <div>
                <PhotoGallery photos={paloAltoNetworks} />
            </div>
        )
    }
}
