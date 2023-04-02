import { QRCodeSVG } from 'qrcode.react';
import { useSelector } from 'react-redux';

const QR = () => {
    const text = useSelector(state => state.text);
    return(
        <QRCodeSVG value={text} size={400}/>
    );
}

export default QR;