/**
 * Created by grawdanin on 27.09.2017.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';


// class Button extends Component {
//     render() {
//
//         return (
//             <button onClick={this.props.onClick}>
//                 {this.props.children}
//             </button>
//         )
//     }
// }




// function Button({onClick, children}) {
//     return (
//         <button onClick={onClick}>
//             {children}
//         </button>
//     )
// }


const Button = ({onClick, children, className}) => {
    return (
        <button
            className={className}
            onClick={onClick}>
            {children}
        </button>
    )
};


export default Button;


Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node
};


