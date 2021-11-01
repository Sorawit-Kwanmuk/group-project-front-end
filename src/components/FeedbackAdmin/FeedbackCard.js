import { TextField } from "@mui/material";
import "./styleFeedbackCard.css";

function FeedbackCard({
  issueNo,
  status,
  dateSent,
  email,
  topic,
  content,
  setIssueInfo,
  index
}) {
  const handleButtonToggle = () => {
    setIssueInfo((curr) => {
      const issueArr = [...curr];
      const currentIssueObj = issueArr[index];
      currentIssueObj.status = !status;
      return issueArr;
    });
  };
  return (
    <div
      className={status ? `FeedbackCardBody-done` : `FeedbackCardBody-undone`}
    >
      <div className="divDetailCard">
        <p className="topic">{`Issue #${issueNo}`}</p>
        <span className="topic resolveBtn" onClick={handleButtonToggle}>
          {status ? `Resolved` : `Unresolved`}
        </span>
      </div>
      <div className="">
        <span className="topic">Date sent: </span>
        <span>{dateSent}</span>
      </div>
      <div className="">
        <span className="topic">Email: </span>
        <span>{email}</span>
      </div>
      <div className="">
        <span className="topic">Topic: </span>
        <span>{topic}</span>
      </div>
      <div className="">
        <TextField
          sx={{ marginY: 2 }}
          multiline
          rows={5}
          variant="outlined"
          size="small"
          fullWidth
          required
          value={content}
        />
      </div>
    </div>
  );
}

export default FeedbackCard;
