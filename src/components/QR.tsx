import { useTypedSelector } from '../hooks/useTypedSelector';
import { QRCodeSVG } from 'qrcode.react';
import './QR.css';

const QR = () => {
    const { text } = useTypedSelector(state => state.text);

    return(
        <QRCodeSVG value={text} className='QR'/>
    );
}

export default QR;