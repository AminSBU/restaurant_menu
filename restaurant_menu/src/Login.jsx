function Login()
{
    return(
        <>
            <div className="form-container">
                <form>
                    <div className="username-text" class="rounded-2xl border-4">
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