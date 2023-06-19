import './HeaderStyle.sass'
import Image from 'next/image'
import Logo from '../../public/favicon.png' 
import Link from 'next/link'

export const Header = () => {
    return (
        <section className='header'>
            <Link href={'/'}><Image className='header-logo' src={Logo} alt="Recipes logo" /></Link>
            <form className='header-form'>
                <input className='text' placeholder="Write the name of the food" type={'text'}></input>
                <input className='button' type={'submit'} value={'Search'}></input>
            </form>
        </section>
    )
}

