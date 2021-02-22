import React, { useEffect, useState } from 'react'


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status] )

    const activateStatusChange = () => {
        setEditMode(true)
    }
     
    const deactivateStatusChange = () => {
        setEditMode(false)
        props.upDateStatus(status)
    }
    const onStatusChange = (elem) => {
        setStatus(elem.currentTarget.value)
    }
    return (
        <>
            {!editMode ?
                <div>
                    <span onClick={activateStatusChange}><b>Статус: </b> {props.status}</span>
                    <p></p>
                </div>
                : <div>
                    <input
                        autoFocus={true}
                        onBlur={deactivateStatusChange}
                        onChange={onStatusChange}
                        type="text"
                        value={status} />
                    <p></p>
                </div>
            }
        </>
    )
}

export default ProfileStatusWithHooks

