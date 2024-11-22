import logo from "./logo.svg";
import "./App.css";

function Feature(){
  return(
    <div className="App">
    <header className="App-header">
    <h3 className="feature-title"> Title</h3>
      <p className="feature-desc">
        Tuandat hoc react
      </p>
    </header>
  </div>
  );
}


//parent component
function App() {
  return (
    <div>
    {/*childrent component*/}
      {/* <Feature></Feature>
      <Feature></Feature> */}
      <YoutubeItem img="https://images.unsplash.com/photo-1678811116814-26372fcfef1b?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></YoutubeItem>
      <YoutubeItem img="https://cfdcircle.vn/files/blog/1648712363-3.png"></YoutubeItem>

    </div>
  );
}

function YoutubeItem(props){
  console.log(props);
  return(
    <div className="youtube-item">
        <div className="youtube-img">
          <img src={props.img} alt=""/>
        </div>
        <div className="youtube-footer">
          <img src="https://plus.unsplash.com/premium_photo-1726837380237-66c802b2e26d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="youtube-avt" />
          <div className="youtube-info">
            <h3 className="youtube-title">Learning React</h3>
            <h4 className="youtube-author">Tuandat</h4>
          </div>
        </div>
        

    </div>
  );
}

export default App;
