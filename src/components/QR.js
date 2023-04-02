import { QRCodeSVG } from 'qrcode.react';

const QR = () => {
    return(
        <QRCodeSVG value="hello world!" size={400}/>
    );
}

export default QR;