import { GithubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";
import { TwiterIcon } from "../icons/twiter-icon";

import "./social-btns.scss"

export default function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/ekner_alexandre/">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/eknereaa/">
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