import React from 'react'
import preloader from '../../../assets/loaderSVG.svg'
import classes from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={classes.preloaderContainer}>
            <img className={classes.preloader} src={preloader} alt='preloader'/>
        </div>
    )
}

export default Preloader