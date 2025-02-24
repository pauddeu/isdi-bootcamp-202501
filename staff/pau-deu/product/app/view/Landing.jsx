function Landing({ onRegisterClick, onLoginClick }) {
    console.debug('Landing -> render')

    const handleLogoClick = () => {
        window.location.reload();  
    }

    return (
        <div>
            <h1 onClick={handleLogoClick}>Logo</h1>
            <a onClick={onRegisterClick}>Register</a> or <a onClick={onLoginClick}>Login</a>
        </div>
    )
}