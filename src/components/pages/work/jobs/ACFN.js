import React, { Component } from 'react'
import { acfn } from '../../../../utils/photos'
import PhotoGallery from '../../../misc/PhotoGallery'

export default class ACFN extends Component {
    render() {
        return (
            <div>
                <PhotoGallery photos={acfn} />
            </div>
        )
    }
}
