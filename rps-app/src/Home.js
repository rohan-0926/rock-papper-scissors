import {Link} from 'react-router-dom';
const Home = () => {
    
    return (
        <div className='home text-center'>
            <Link to="/rps"><button type="button" className="btn btn-dark">Play Now</button></Link>
            <h2 className='home-header text-center'>HAVE FUN!</h2>
        </div>
        
    );
}
 
export default Home;