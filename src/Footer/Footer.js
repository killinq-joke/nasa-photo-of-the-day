import React from 'react';

function Footer(props) {
    return(
            <footer>
                <p>@{props.copyright} - {props.date}</p>
            </footer>
    )
}

export default Footer;