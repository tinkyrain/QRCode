import './QR.css';
import { QRCodeSVG } from 'qrcode.react';
import { useSelector } from 'react-redux';

const QR = () => {
    const text = useSelector(state => state.text);
    return(
        <QRCodeSVG value={text} className='QR'/>
    );
}

export default QR;