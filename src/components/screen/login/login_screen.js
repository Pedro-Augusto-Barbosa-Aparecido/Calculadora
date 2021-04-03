import { Button } from 'reactstrap'
import { BsArrowRight } from 'react-icons/all'
import { useNavigate } from 'react-router-dom'
import './login_screen.css'

export default function (props) {

    let navigate = useNavigate()

    return (
        <div className="App-header">
            <div className="Container"> 
                <h1 className="Label-title">{props.title_login}</h1>

                <div className="Container-input-name">
                    <input type="text" className="Input-block" maxLength="150" placeholder="Type your username or email..." />
                </div>

                <div className="Container-input-name">
                    <input type="password" className="Input-block" maxLength="100" placeholder="Type you password..." />
                </div>

                <div className="Button">
                    <Button color="primary" size="lg" block>
                            <div className="General">
                                <p className="Button-font">Login</p>
                                <BsArrowRight /> 
                            </div>
                    </Button>
                </div>

                <div className="Singin">
                        <h3 className="Label">No has a Account <a className="Link" href="#" onClick={() => navigate('/')}>Sing in</a></h3>
                </div>

            </div>
        </div>
    )
}
