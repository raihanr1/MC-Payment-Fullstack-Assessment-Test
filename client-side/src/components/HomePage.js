import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ActivitiesGraphic from "./ActivitesGraphic";
import CardInfo from "./CardInfo";
import GoalsBudget from "./GoalsBudget";
import StatisticGraphic from "./StatisticGraphic";
import TransactionHistory from "./TransactionHistory";
import { getUserInformation } from "../store/action/transactionAction";

export default function HomeComponent() {
  const dispatch = useDispatch();
  const { usersInformation, loading, error } = useSelector(
    (state) => state.transaction
  );
  useEffect(() => {
    if (!Object.keys(usersInformation).length) {
      dispatch(getUserInformation());
    }
  }, []);
  return (
    <div style={{ marginLeft: "40px" }}>
      <div style={{ display: "flex" }}>
        <ActivitiesGraphic />
        <StatisticGraphic />
        <CardInfo />
      </div>
      <div style={{ display: "flex", marginTop: "20px" }}>
        <TransactionHistory />
        <GoalsBudget />
      </div>
    </div>
  );
}
