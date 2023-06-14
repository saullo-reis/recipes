import './HeaderStyle.sass'

export const Header = () => {
    return (
        <section className='header'>
            <h1 className='header-logo'>Recipes</h1>
            <form className='header-form'>
                <input className='text' placeholder="Write the name of the food" type={'text'}></input>
                <input className='button' type={'submit'} value={'Search'}></input>
            </form>
        </section>
    )
}

