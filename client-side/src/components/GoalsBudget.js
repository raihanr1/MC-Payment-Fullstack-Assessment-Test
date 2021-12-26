import CardGoals from "./CardGoalsBudget";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
export default function GoalsBudget() {
  const { usersInformation, loading, error } = useSelector(
    (state) => state.transaction
  );
  const [goals, setGoals] = useState([]);
  useEffect(() => {
    if (Object.keys(usersInformation).length && !loading) {
      let transaction = usersInformation.transaction;
      let filtered = transaction.filter((el) => el.status === "Goals Budget");
      setGoals(filtered);
      console.log(filtered);
    }
  }, [usersInformation, loading]);
  return (
    <div style={{ marginLeft: "20px", overflow: "hidden" }}>
      <h1 className="sub">Goals Budget</h1>
      <div className="goals-budget-container">
        <div className="scroolbar-content">
          {goals.length && !loading
            ? goals.map((el, i) => {
                return <CardGoals goal={el} key={i} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
}
