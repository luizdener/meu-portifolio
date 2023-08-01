import { DiGithubBadge } from "react-icons/di"
import {TiSocialInstagram, TiSocialLinkedin} from "react-icons/ti"
import {TbBrandInstagram} from "react-icons/tb"

import './socialBtns.scss'

const SocialBtns = () => {
    return (
        <div class="social-btns">
            <a className="icons" href="https://www.instagram.com/dhe_dejesus/" target="_blank"><TbBrandInstagram className="icon-insta"/></a>
            <a className="icons" href="https://www.linkedin.com/in/luiz-dener-7154b2215/" target="_blank"><TiSocialLinkedin className="icon-linkedin"/></a>
            <a className="icons" href="https://github.com/luizdener" target="_blank"><DiGithubBadge className="icon-git"/></a>
        </div>
    )
}

export default SocialBtns