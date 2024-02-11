import { Link } from 'react-router-dom';

const SamplePage = (props) => {
    return <div>
        <h1>Hello welcome to the page!</h1>
        <h2>Sample Page</h2>
        <Link to="/">
            Home
        </Link>
    </div>
}

export default SamplePage;
