import React, { Component } from 'react'
import { orhs } from '../../../../utils/photos'
import PhotoGallery from '../../../misc/PhotoGallery'

export default class ORHS extends Component {
    render() {
        return (
            <div>
                <PhotoGallery photos={orhs} />
            </div>
        )
    }
}
