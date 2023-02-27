import React, { Component } from 'react';
import { connect} from "react-redux";
import { onChange } from './action';

class Count extends Component {
    handleIncrement =() =>{
        this.props.onInc({name: 'alex', designation: 'IT'})
    }

    render() {
        console.log(this.props.empData)
        return (
            <>
                <p>{this.props.empData.name}</p>
                <p>{this.props.empData.designation}</p>
                <button onClick={this.handleIncrement}>Change</button>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        empData: state.empData
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onInc: (val) => dispatch(onChange(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count);