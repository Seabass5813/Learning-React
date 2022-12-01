const Home = () => {

    const handleClick = () => {
        console.log('hello peeps')
    }

    const handleClickAgain = (name) => {
        console.log('hello ' + name)
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click ME</button>
            <button onClick={() => handleClickAgain("John")}>Click Me 2</button>
        </div>
     );
}
 
export default Home;