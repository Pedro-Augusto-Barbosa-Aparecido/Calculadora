import Singin from './screen/singin_screen'
import Login from './screen/login_screen'

export default function (props) {
    return (
        props.title_login === 'C' ? <Singin title_login="Create a new Account" /> : <Login title_login="Login on your Account" />
    )
}