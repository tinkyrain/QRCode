import './QR.css';
import { QRCodeSVG } from 'qrcode.react';

const QR = () => {
    let text:string = 'hello'
    return(
        <QRCodeSVG value={text} className='QR'/>
    );
}

export default QR;