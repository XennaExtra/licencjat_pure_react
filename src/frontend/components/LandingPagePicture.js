import './component_css/landing_picture.scss'
import landing_pic from './component_elements/landing_pic.jpg'
export function LandingPagePicture(){
    return(
        <main className={'landingPicBox'}>
            <img src={landing_pic} alt=''/>
        </main>
    )
}

