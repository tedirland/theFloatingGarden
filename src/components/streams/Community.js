import React from 'react';


class Community extends React.Component {
    render() {
        return (
        <div className="ui centered large card">
            <div className="content">
                <div className="right floated meta">14h</div>
                <img className="ui avatar image" src="\images/inwatersunny.png" alt="test" />
            </div>
            <div className="image">
                <img src="\images\inwatersunny.png" alt="test" />
            </div>
            <div className="content">
                <span className="right floated">
                    <i className="heart outline like icon" />
                    0 likes
                </span>
                <i className="comment icon" />
                3 comments
            </div>
            <div className="extra content">
                <div className="ui large transparent left icon input">
                    <i className="heart outline icon" />
                    <input type="text" placeholder="Add Comment..."></input>
                    
                </div>
            </div>
        </div>  
        )
    }
}
export default Community