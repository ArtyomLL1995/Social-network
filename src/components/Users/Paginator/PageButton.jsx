import React from 'react'
import classes from './PageButton.module.css'


const PageButton = (props) => {
    const switchPage = () => {
        props.removeUsers()
        props.getUsers(props.pageSize, props.button)
    }

    return (
        <>
            {props.button === props.pageCount
                ? <div>
                    <button className={classes.checkedButton} onClick={switchPage}>{props.button}</button>
                </div>
                : <div>
                    <button key={props.button} onClick={switchPage}>{props.button}</button>
                </div>
            }

        </>

    )
}

export default PageButton