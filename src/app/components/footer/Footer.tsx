import Image from "next/image"
import logo from '../../public/favicon.png'
import './FooterStyle.sass'

export const Footer = () => {
    return(
        <section className="footer">
            <Image className="footer-image" src={logo} alt="Recipes Logo"/>
            <div className="footer-container">
                <p className="footer-container-text">© Copyright 2023 - Todos os direitos reservados.</p>
                <p className="footer-container-text">Saullo Reis</p>
            </div>
        </section>
    )
}