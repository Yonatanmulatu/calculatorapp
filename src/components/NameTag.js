import React from 'react';

class NameTag extends React.Component {
    render() {
        return(
            <div>
                Name: {this.props.name}
            </div>
        )
    }
}

export default NameTag; 