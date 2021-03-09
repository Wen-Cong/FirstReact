import React from 'react'

const Header = (props) => {
    return (
        <div>
            <h2 style={{display: 'inline'}}>My To-Do List</h2>
            <button className={props.formIsShown ? 'btn btn-danger' : 'btn btn-primary'} style={timeCss} onClick={props.onFormShow}>{props.formIsShown ? 'Close' : 'Add'}</button>
        </div>
    )
}

const timeCss = {
    position: 'absolute',
    right: '20px',
    marginTop: '5px'
}

export default Header


