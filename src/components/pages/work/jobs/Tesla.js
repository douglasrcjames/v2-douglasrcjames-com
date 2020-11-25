import React, { Component } from 'react'
import { teslaMisc } from '../../../../utils/photos'
import PhotoGallery from '../../../misc/PhotoGallery'

export default class Tesla extends Component {
    render() {
        return (
            <div>
                <PhotoGallery photos={teslaMisc} />
            </div>
        )
    }
}
