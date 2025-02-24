const { useState, useEffect } = React

function Home({ onLogoutClick }) {
    const [view, setView] = useState('posts')
    const [userName, setUserName] = useState('')
    // TODO add state for posts

    useEffect(() => {
        console.debug('Home -> useEffect')

        try {
            const name = logic.getUserName()

            setUserName(name)

            // TODO load posts by means of logic
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }, [])

    const handleLogoutClick = () => {
        try {
            logic.logoutUser()

            onLogoutClick()
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    console.debug('Home -> render')

    return <div>
        <h1>Logo</h1>

        <h2>Hello, {userName}!</h2>

        <button type="button" onClick={handleLogoutClick}>Logout</button>

        {view === 'posts' && <section>
            {/* TODO render posts from state */}

            <article>
                <h3>m71tml17ly</h3>

                <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExczhrbm9mdjE3YzAwanRvdjB4YnRwa2V0YzVrNXh3ZjZweDJzcWp5cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/R2FYBXnm2XNOlTLr9z/giphy.gif" />

                <p>run boy run...</p>

                <time>2025-02-09T23:00:00.000Z</time>

                <button>♥️ (1)</button>
            </article>

            <article>
                <h3>m71tm7l3l5l</h3>

                <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXM5cWc4bzQwc3VpMTA1ankza3JjNzNieHVvZGw4ZGJvZDN2dGEzbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o85xtS28vGIkopiLu/giphy.gif" />

                <p>oh no...</p>

                <time>2024-12-31T23:00:00.000Z</time>

                <button>♥️ (2)</button>
            </article>
        </section>}

        {view === 'create-post' && <section>
            <form>
                <label>Image</label>
                <input type="url" />

                <label>Text</label>
                <input type="text" />

                <button type="submit">Create</button>
            </form>

            <a>Cancel</a>
        </section>}

        {view === 'posts' && <button>+</button>}
    </div>
}