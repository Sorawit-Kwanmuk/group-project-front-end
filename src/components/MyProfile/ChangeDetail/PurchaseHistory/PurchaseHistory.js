import './stylePurchaseHistory.css';
import TableBody from './TableBody/TableBody';
function PurchaseHistory() {
  return (
    <div>
      <div className='tablePurchaseHistory'>
        <div className='tableHeader1'>Date</div>
        <div className='tableHeader2'>Order Id</div>
        <div className='tableHeader3'>Course Name</div>
        <div className='tableHeader4'>Price</div>
      </div>
      <div>
        <TableBody />
        <TableBody />
        <TableBody />
        <TableBody />
        <TableBody />
        <TableBody />
        <TableBody />
        <TableBody />
        <TableBody />
      </div>
    </div>
  );
}

export default PurchaseHistory;
