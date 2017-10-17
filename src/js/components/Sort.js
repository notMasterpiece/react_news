/**
 * Created by grawdanin on 08.10.2017.
 */


import React from 'react';

const Sort = ({sortKey, children, onSort, active}) => {

    let sortClass = 'btn btn-success';

    if( sortKey === active) {
        sortClass = (' btn btn-danger');
    }


    // console.log(sortClass);


    return (
      <li
          className={sortClass}
          onClick={() => onSort(sortKey) }
      >{children}</li>
  )
};


export default Sort;
