import './css/verification-succesful.css';

const App = () => {
    return (
        <>
        <section className="ta-vs-container-flex">
            <div className="ta-vs-container">
                <h1>Verification Successful</h1>
                <p>Your account is now activated. Let’s book your first consultation meeting.</p>
                <div className='tick'>
                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="200" height="200" rx="100" fill="#EEEEEE"/>
                        <circle cx="100.5" cy="99.5" r="74.5" fill="black"/>
                        <path d="M58 103L84 129L142 71" stroke="white" stroke-width="12"/>
                    </svg>
                </div>
                <a href='./' className='button'>Complete Profile to book</a>
            </div>
        </section>
        </>
    )
};

export default App;