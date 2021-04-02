import { Button } from 'reactstrap'
import { BsArrowRight } from 'react-icons/all'
import './singin_screen.css'

export default function (props) {
    return (
        <div className="Container">
           <h1 className="Label-title">{props.title_login}</h1>

           <div className="Input">
                <input className="Input-block" type="text" onChange="" placeholder="Type you user name..." />
           </div>

           <div className="Container-input-name">
               <div className="Container-input-name"> 
                    <input className="Input-block-name" type="text" maxLength="20" placeholder="First name..." onChange="" />
               </div>
               <div className="Container-input-name"> 
                    <input className="Input-block-name" type="text" maxLength="20" placeholder="Last name..." onChange="" />
               </div>
           </div>

           <div className="Input-2">
               <input type="email" className="Input-block" maxLength="150" placeholder="Type your email..." />
           </div>

           <div className="Input-2">
               <input type="password" className="Input-block" maxLength="150" placeholder="Type your password..." />
           </div>

           <div className="Button">
               <Button color="primary" size="lg" block>
                    <div className="General">
                        <p className="Button-font">Sing in</p>
                        <BsArrowRight /> 
                    </div>
               </Button>
           </div>

           <div className="Singin">
                <h3 className="Label">Already has a Account <a className="Link" href="#">login</a></h3>
           </div>

        </div>
    )
}
