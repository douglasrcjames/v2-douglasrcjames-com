import React, { Component } from 'react'

export default class Job extends Component {
    render() {
        return (
            <div>
                <div>
                    {/* HeaderUrl here */}
                </div>
                <div className="wrapper">
                    <h1>{this.props.job.title}</h1>
                    <p>{this.props.job.longDescription}</p>
                    {this.props.job.extraContent}
                </div>
            </div>
        )
    }
}
