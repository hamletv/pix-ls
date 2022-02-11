

const SplashPage = () => {
    const myStyle={
        backgroundImage:
 "url('https://images.unsplash.com/photo-1643133277936-9f93d8792522?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <>
        <div style={myStyle}>
            <h1>Pixls</h1>
        </div>
        </>
    );
}


{/* <div>
    <h1>Splash Page</h1>
</div> */}
export default SplashPage;
