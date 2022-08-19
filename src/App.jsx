import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { PDF } from './PDF';
import './App.css';

function App() {
  
  const doc = new jsPDF();

  const handleClick = () => {
    const input = document.getElementById('divToPrint');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      console.log(imgData);
      doc.addImage(imgData, 'JPEG', 0, 0, 200, 300);
      doc.save('test.pdf');
    });
  };

  return (
    <div className="App">
      <PDF />
      <button onClick={handleClick}>Print</button>
    </div>
  );
}

export default App;
