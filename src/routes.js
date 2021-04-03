import { 

    Route, 
    Routes, 

} from 'react-router-dom'

import Singin from './components/screen/singin/singin_screen'
import Login from './components/screen/login/login_screen'
import NotFound from './components/screen/not_found/notfound'

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={ <Singin title_login="Create a new Account" /> } />
            <Route path="/login" element={ <Login title_login="Login with your Account" /> } />
            <Route path="*" element={ <NotFound /> } />
        </Routes>
    )
}
