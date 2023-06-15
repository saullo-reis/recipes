import './HeaderStyle.sass'
import Image from 'next/image'
import Logo from '../../public/favicon.png' 

export const Header = () => {
    return (
        <section className='header'>
            <Image className='header-logo' src={Logo} alt="Recipes logo"/>
            <form className='header-form'>
                <input className='text' placeholder="Write the name of the food" type={'text'}></input>
                <input className='button' type={'submit'} value={'Search'}></input>
            </form>
        </section>
    )
}

