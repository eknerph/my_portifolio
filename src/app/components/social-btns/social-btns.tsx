import { GithubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";
import { TwiterIcon } from "../icons/twiter-icon";

interface SocialBtnsProps {

}
export default function SocialBtns(props : SocialBtnsProps){
    return(
        <div className="social">
            <a href="">
                <InstaIcon/>
            </a>
            <a href="">
                <LinkedinIcon/>
            </a>
            <a href="">
                <GithubIcon/>
            </a>
            <a href="">
                <TwiterIcon/>
            </a>
            
            
            
        </div>
    )
}