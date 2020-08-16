import React from 'react';
class DeviceOverview extends React.Component {
    render() {
        return (
            <div>
                Hello {this.props.name}
            </div>
        );
    }
}
export default DeviceOverview;