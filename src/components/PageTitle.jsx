import './PageTitle.css';
import { Link } from "react-router-dom";

export default function PageTitle() {
    return (
        <Link to='/' style={{textDecoration: 'none'}}>
                <div className='title'>kenttcraneのページ</div>
        </Link>
    );
}