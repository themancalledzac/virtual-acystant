function LogoutButton() {

    const logout = useLogout();

    return <button onClick={logout}>Logout</button>

}

export default LogoutButton;