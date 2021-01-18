import React from 'react';
import { connect} from 'react-redux';
import {createStream} from "../../actions";


class About extends React.Component {
    
    onSubmit = formValues => {
       this.props.createStream(formValues)
    };
    render () {
        return ( 
          <div>About section here</div>
        );
}
}





export default connect(null, {createStream}) (About)