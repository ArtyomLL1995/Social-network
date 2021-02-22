import React, { useState } from 'react'
import PageButton from './PageButton'
import classes from './PageButton.module.css'

const Paginator = (props) => {

    const buttonsPortion = 7
    let touchedDecrementButton = false
    const [initialPage, setInitialPage] = useState(props.pageCount)
    const [numberOfShowedButtons] = useState(buttonsPortion)
    const [decrementNumber, setDecrementNumber] = useState(buttonsPortion)
    const [incrementNumber, setIncrementNumber] = useState(buttonsPortion)
    const numberOfPageButtons = Math.ceil(props.totalCount / props.pageSize)


    const incrementInitialPage = () => {
        setInitialPage(initialPage + incrementNumber)
    }

    const decrementInitialPage = () => {
        setInitialPage(initialPage - decrementNumber)
        touchedDecrementButton = true
        if (touchedDecrementButton && decrementNumber !== buttonsPortion) setDecrementNumber(buttonsPortion)

    }

    const createButtonsArray = () => {
        let buttonsInitializeArray = []
        for (let i = initialPage; i < numberOfPageButtons + 1; i++) {
            buttonsInitializeArray.push(i)
        }

        if (initialPage === 1) {
            return buttonsInitializeArray
        }
        else if (initialPage - decrementNumber < 0) {
            setDecrementNumber((decrementNumber - 1) + (initialPage - decrementNumber))
        }

        return buttonsInitializeArray
    }

    let buttons = createButtonsArray().map(function (button) {
        if (button > initialPage + numberOfShowedButtons - 1) {
            return
        }
        return <PageButton
            button={button}
            pageSize={props.pageSize}
            getUsers={props.getUsers}
            pageCount={props.pageCount}
            totalCount={props.totalCount}
            removeUsers={props.removeUsers}
        />
    })

    return (
        <div className={classes.buttonsContainer}>
            {initialPage === 1
                ? null
                : <div>
                    <button onClick={decrementInitialPage}>назад</button>
                </div>}
            {buttons}
            {numberOfPageButtons - incrementNumber <= initialPage
                ? null
                : <div>
                    <button onClick={incrementInitialPage}>Вперед</button>
                </div>
            }
        </div>
    )
}

export default Paginator