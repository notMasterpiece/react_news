import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';



import list from '../.././json';
import Search from './search';
import Table from './Table';
import Button from './Button';


import searching from '../../help';


import {
    DEFAULT_QUERY,
    DEFAULT_PAGE,
    DEFAULT_HPP,
    PATH_BASE,
    PATH_SEARCH,
    PARAM_SEARCH,
    PARAM_PAGE,
    PARAM_HPP
} from './constans';


const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;


const page = 0;


class App extends Component {
  constructor(props) {
    super(props);


    this.remove = this.remove.bind(this);
    this.search = this.search.bind(this);
    this.fetctStories = this.fetctStories.bind(this);
    this.setStories = this.setStories.bind(this);
    this.onSort = this.onSort.bind(this);




    this.state = {
      result: null,
      json: list,
      value: '',
      searchValue: DEFAULT_QUERY,
      isLoading: false,
      sortKey: 'NONE',
      isSortReverse: false
    }
  }


  // sorting function

    onSort(sortKey) {
    const isSortReverse = this.state.sortKey === sortKey && !this.state.isSortReverse;
        console.log(sortKey);
        this.setState({
          sortKey,
          isSortReverse
      })
    }


  search(e) {
      console.log(e);
      e.preventDefault();
      // console.log(2);
      this.setState({
        value: e.target.value
    });

    this.fetctStories(this.state.value, DEFAULT_PAGE);
  }

    remove(e) {
      function isNotId(result) {
          return result.objectID !== e
      }

      const updateList = this.state.result.hits.filter(isNotId);

      this.setState({
          result: {...this.state.result, hits: updateList}
      })
  }







    // fetch

    setStories(result) {

      const {hits, page} = result;
      const oldHits = page !== 0 ? this.state.result.hits : [];
      const newHits = [...oldHits, ...hits];

      this.setState({
            result: {hits: newHits, page},
            isLoading: false
        })
    }


    fetctStories(searchValue, page) {
        this.setState({
            isLoading: true
        });
        fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${this.state.value}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
            .then(response => response.json())
            .then(result => {
                this.setStories(result);
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }



    componentDidMount(){
        this.fetctStories(this.state.searchValue, DEFAULT_PAGE)
    }


    // serch on change






  render() {

    const {result, value, isLoading, sortKey, isSortReverse } = this.state;

    const page = (result && result.page) || 0;


      return (
    <Grid fluid>
        <Row>
            {/*<Col sm={12}>*/}
                <div className="app">
                    <Search
                      onChanging={this.search}
                      value={value}

                    ><span>Search...</span></Search>
                </div>
            {/*</Col>*/}
        </Row>
        <Row>
            <div className="jumbotron">
                {
                    result &&
                    <div>
                        <Table
                            isSortReverse={isSortReverse}
                            sortKey={sortKey}
                            onSort={this.onSort}
                            json={ result }
                            value={ value }
                            remove={this.remove}
                        />
                    </div>
                }
                {
                    isLoading ?
                        <button className="btn">Loading...</button>
                        :
                        <Button
                            className='btn btn-success'
                            onClick={()=> {this.fetctStories(this.state.searchValue, page + 1)}}
                        >Load more
                        </Button>

                }


            </div>
        </Row>
    </Grid>
    )
  }
}

export default App;