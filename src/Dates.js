function Dates(props) {
  var currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + props.day);
  var date = currentDate.toLocaleString("en-US", { day: "2-digit" });
  var month = currentDate.toLocaleString("en-US", { month: "short" });
  var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var today = new Date();
  today.setDate(today.getDate() + props.day);
  return (
    <>
      <div className="dates">
        <h5>
          {date} {month} {week[today.getDay()]}
        </h5>
      </div>
    </>
  );
}
export default Dates;
