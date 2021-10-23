import { TextField } from '@mui/material';
import './styleFeedbackCard.css';

function FeedbackCard() {
  return (
    <div className='FeedbackCardBody'>
      <div className='divDetailCard'>
        <p className='topic'>Issue #25</p>
        <span className='topic'>Resolved</span>
      </div>
      <div className=''>
        <span className='topic'>Date sent: </span>
        <span>18/10/2021</span>
      </div>
      <div className=''>
        <span className='topic'>Topic: </span>
        <span>Can't get Certificate from JS course</span>
      </div>
      <div className=''>
        <span className='topic'>Email: </span>
        <span>Goodguy@gmail.com</span>
      </div>
      <div className=''>
        <TextField
          sx={{ marginY: 2 }}
          label='Content'
          placeholder='Enter Content'
          multiline
          rows={5}
          variant='outlined'
          size='small'
          fullWidth
          required
        />
      </div>
    </div>
  );
}

export default FeedbackCard;
