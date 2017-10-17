/**
 * Created by grawdanin on 23.09.2017.
 */

import React, {Component} from 'react';
import logo from '../../assets/images/logo.svg';



class Search extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.refs.input.focus();
    }

    render() {
        const { children, onChanging, value, searchNews} = this.props;

        return (
            <form className="form-group" onSubmit={searchNews}>
                <img className="logo" src={logo} alt=""/>
                <span className="logo_search">{children}</span>
                <input
                    className="form-control"
                    type="text"
                    onChange={onChanging}
                    value={value}
                    ref="input"
                />
            </form>
        )
    }
}


export default Search;
