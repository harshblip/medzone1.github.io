import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faGithub
} from "@fortawesome/free-brands-svg-icons";
export default function SocialFollow() {
    return (
        <div class="social-container flex justify-start mt-24 -ml-20 space-x-10">
            {/* <h3 class = "font-popi font-2xl mt-8">Follow us on our Socials</h3> */}
            <FontAwesomeIcon icon={faGithub} size="2x" />
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            <FontAwesomeIcon icon={faInstagram} size="2x" />
        </div>
    );
}