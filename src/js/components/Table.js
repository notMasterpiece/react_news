/**
 * Created by grawdanin on 27.09.2017.
 */

import React, {Component} from 'react'
import {sortBy} from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


import searching from '../../help';
import Button from './Button';
import Count from './Count';
import Sort from './Sort';



const SORTS = {
    NONE: list => list,
    TITLE: list => sortBy(list, 'title'),
    AUTHOR: list => sortBy(list, 'autor'),
    POINTS: list => sortBy(list, 'points').reverse(),
    COMMENTS: list => sortBy(list, 'num_comments').reverse()
};

class Table extends Component {
    render() {

        const {json, value, remove, sortKey, onSort, isSortReverse} = this.props;

        const reverseSorted = isSortReverse ? SORTS[sortKey](json.hits) : SORTS[sortKey](json.hits).reverse();

        // console.log(json);

        return (
            <div>
            <div className="news_title">
                <h3>News__</h3>
                <Count data={json.hits}/>
            </div>
            <ul className="sorting">
                <Sort
                    sortKey={'NONE'}
                    onSort={onSort}
                    active={sortKey}
                >
                    Default
                </Sort>
                <Sort
                    sortKey={'TITLE'}
                    onSort={onSort}
                    active={sortKey}
                >
                    Title
                </Sort>
                <Sort
                    sortKey={'AUTHOR'}
                    onSort={onSort}
                    active={sortKey}
                >
                    Author
                </Sort>
                <Sort
                    sortKey={'POINTS'}
                    onSort={onSort}
                    active={sortKey}
                >
                    Points
                </Sort>
                <Sort
                    sortKey={'COMMENTS'}
                    onSort={onSort}
                    active={sortKey}
                >
                    Comments
                </Sort>
            </ul>

            {/*<ReactCSSTransitionGroup*/}
                {/*component="ul"*/}
                {/*transitionName="slide"*/}
                {/*transitionEnterTimeout={700}*/}
                {/*transitionLeaveTimeout={700}*/}
                {/*className="list">*/}
                <section className="list">
                {
                    reverseSorted.map((e) => {
                        return (
                            <li key={e.objectID}>
                                <div className="date">{e.created_at}</div>
                                <a href={e.url}>{e.title}</a>
                                <div className="autor">Autor | {e._highlightResult.author.value}</div>
                                <div className="comments">comments: {e.num_comments}</div>
                                <div className="points">points: {e.points}</div>
                                <Button
                                    className='btn btn-danger'
                                    onClick ={() => remove(e.objectID)}>
                                    delete
                                </Button>
                            </li>
                        )
                    })
                }
                </section>
            {/*</ReactCSSTransitionGroup>*/}
            </div>
        )
    }
}


export default Table;




