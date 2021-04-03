import { useNavigate } from 'react-router-dom'
import './notfound.css'

export default function () {

    let navigate = useNavigate()

    return (
        <div className="App-header">
            <h1 className="Not-found">Not Founded</h1>
            <h4>
                <a className="Return" href="" onClick={() => navigate('/')}>Return to intial page</a>
            </h4>
        </div>
    )
}