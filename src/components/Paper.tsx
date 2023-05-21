import Input from './Input';
import QR from './QR';
import './Paper.css';

const Paper = () => {
    return (
        <div className='paper'>
            <QR/>
            <Input/>
        </div>
    );
}

export default Paper;