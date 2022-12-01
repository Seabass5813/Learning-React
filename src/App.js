
import Navbar from './Navbar';
import Home from './Home';

function App() {
  /*const title = 'Welcome to the New Blog';*/
  const likes = 50

  //booleans and objects will not display on websites. Like the one below.

  //const person = { name : 'Yoshi', age: 30};

  const link = 'https://www.google.com/';

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/*<h1> { title }</h1>*/}
        <Home />
        <p> Liked { likes } times. </p>

         {/*<p> { person } </p>*/}

         <p> { 10 } </p>
         <p> { "Hello, World!" } </p>
         <p> { [1,2,3,4,5] } </p>
         <p> { Math.random() * 10 } </p>
          {/* Both of the ones below work. The second one works because the link variable was created way above ^ */ }
         <a href='https://www.google.com/'> Google Site </a>
        
         { /* Use below to create breaks */}
         
         <br></br>

         {<a href= { link }> Google Site</a>}

      </div>
    </div>
  );
}

export default App;
