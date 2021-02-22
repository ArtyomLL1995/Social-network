import React from 'react'
import { create } from 'react-test-renderer'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

describe('Profile status component', () => {
    test('status from props should be in state', () => {
        const component = create(<ProfileStatusWithHooks status='status'/>)
        let instance = component.getInstance()
        expect (instance.state.status).toBe('status')
    })
    
})