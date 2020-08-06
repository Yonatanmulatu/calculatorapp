import React from 'react';

class ScoreWidget extends React.Component {
    render() {
        return(
            <div>
            score: {this.props.score}
            </div>
        )
    }
}

export default ScoreWidget;
