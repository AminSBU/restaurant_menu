function Login()
{
    return(
        <>
            <div className="form-container">
                <form>
                    <div className="username-text">
                        <input type="text" required placeholder="username"></input>
                    </div>
                    <div className="password-text">
                        <input type="password" required placeholder="password"></input>
                    </div>
                    <div className="login-btn">
                        <button>Login</button>
                    </div>
                </form>
            </div>
       
            </>
     );
}

export default Login;