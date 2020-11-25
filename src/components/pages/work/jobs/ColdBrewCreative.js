import React, { Component } from 'react'
import { coldbrewCreative } from '../../../../utils/photos'
import PhotoGallery from '../../../misc/PhotoGallery'

export default class ColdBrewCreative extends Component {
    render() {
        return (
            <div>
                <PhotoGallery photos={coldbrewCreative} />
            </div>
        )
    }
}
