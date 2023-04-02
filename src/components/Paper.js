import Input from './Input';
import Button from './Button';
import './Paper.css';

const Paper = () => {
    return (
        <div className='paper'>
            <div className='QR'></div>
            <Input/>
            <Button/>
        </div>
    );
}

export default Paper;