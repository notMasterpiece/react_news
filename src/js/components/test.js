/**
 * Created by grawdanin on 11.10.2017.
 */


import React from 'react';


class Test extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            name: 'Vasa',
            date: new Date()
        }

    }


    componentDidMount() {
        setInterval( () => {
            this.setState({
                date: new Date()
            })
        }, 1000);

    }

    render() {

        let {name, date} = this.state;

        console.log(this.props);

        return (
            <div>
                <div>{Math.random()}</div>
                <div className="name">{name}</div>
                <div className="date">{date.toLocaleTimeString()}</div>
            </div>
        )
    }

}


export default Test;
