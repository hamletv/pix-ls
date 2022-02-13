import { useDispatch } from 'react-redux'
import * as sessionActions from '../../store/session'

const DemoUser = () => {
    const dispatch = useDispatch()

    const handleClick = e => {
        e.preventDefault()

        const credential = 'Demo-lition'
        const password = 'password'

        dispatch(sessionActions.login({credential,password}))
    }
    return (
        <button id='demo_button' onClick={handleClick} type="submit" className='function-button'>Demo</button>
    )
}
export default DemoUser;
