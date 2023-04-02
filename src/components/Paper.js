import Input from './Input';
import Button from './Button';
import QR from './QR';
import './Paper.css';

const Paper = () => {
    return (
        <div className='paper'>
            <QR/>
            <Input/>
            <Button/>
        </div>
    );
}

export default Paper;