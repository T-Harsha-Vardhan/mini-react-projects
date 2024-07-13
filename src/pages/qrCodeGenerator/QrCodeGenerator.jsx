import QRCode from "react-qr-code";
import "./qr-code-generator.css";
import { useState } from "react";

const QrCodeGenerator = () => {
  const [inputVal, setInputVal] = useState("");
  const [qrVal, setQRVal] = useState(null);

  const handleOnChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQRVal(inputVal);
  };

  return (
    <div id="qr-code-scanner">
      <div className="qr-wrapper">
        <div className="input">
          <input
            type="text"
            name="text"
            id="text"
            placeholder="enter value here"
            onChange={handleOnChange}
          />
          <button onClick={handleSubmit}>Generate QR</button>
        </div>
        <div className="qr-code">
          {qrVal ? <QRCode value={qrVal} /> : <p>&nbsp;</p>}
        </div>
      </div>
    </div>
  );
};

export default QrCodeGenerator;
