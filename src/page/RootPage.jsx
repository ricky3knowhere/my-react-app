import React from 'react';

function RootPage(props) {

    const {onClickLogOut} = props

    return(
        <div>[Root Page]<br/><br/>
          <button onClick ={onClickLogOut}>Log Out</button>
        </div>
    )
}

export default RootPage