import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUserPlan } from "../../store/asyncThunks/deleteUserPlan";
import { fetchUserPlanByUsername } from "../../store/asyncThunks/fetchUserPlanByUsername";
import { ReducerType } from "../../store/rootReducer";
import { AppThunkDispatch } from "../../store/store";
import { Flex } from "../atom/flex";
import { MarginBox } from "../atom/marginBox";
import { Text } from "../atom/text";
import { BaseStyles } from "../theme";

interface PlanProps {
  detail?: string;
  completed?: boolean;
  onClick?: (e: any) => any;
  id?: string;
}

export const Plan = ({ detail, completed, onClick, id }: PlanProps) => {
  const { username } = useSelector((state: ReducerType) => state.userInfo);
  const dispatch = useDispatch<AppThunkDispatch>();
  return (
    <Flex width="100%" alignItems="center">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
        id={id}
      >
        {!completed ? (
          <path
            d="M5.67321 8.24464C5.38125 8.53661 4.90446 8.53661 4.6125 8.24464L2.89821 6.53036C2.60545 6.23839 2.60545 5.76161 2.89821 5.46964C3.19018 5.17768 3.66696 5.17768 3.95893 5.46964L5.14286 6.65357L8.04107 3.75536C8.33304 3.46339 8.80982 3.46339 9.10179 3.75536C9.39375 4.04732 9.39375 4.52411 9.10179 4.81607L5.67321 8.24464ZM0 1.71429C0 0.767411 0.767411 0 1.71429 0H10.2857C11.2312 0 12 0.767411 12 1.71429V10.2857C12 11.2312 11.2312 12 10.2857 12H1.71429C0.767411 12 0 11.2312 0 10.2857V1.71429ZM1.28571 1.71429V10.2857C1.28571 10.5214 1.4775 10.7143 1.71429 10.7143H10.2857C10.5214 10.7143 10.7143 10.5214 10.7143 10.2857V1.71429C10.7143 1.4775 10.5214 1.28571 10.2857 1.28571H1.71429C1.4775 1.28571 1.28571 1.4775 1.28571 1.71429Z"
            fill={BaseStyles.Color.Beige3}
            id={id}
          />
        ) : (
          <path
            d="M10.2857 0C11.2312 0 12 0.767411 12 1.71429V10.2857C12 11.2312 11.2312 12 10.2857 12H1.71429C0.767411 12 0 11.2312 0 10.2857V1.71429C0 0.767411 0.767411 0 1.71429 0H10.2857ZM9.10179 4.81607C9.39375 4.52411 9.39375 4.04732 9.10179 3.75536C8.80982 3.46339 8.33304 3.46339 8.04107 3.75536L5.14286 6.65357L3.95893 5.46964C3.66696 5.17768 3.19018 5.17768 2.89821 5.46964C2.60545 5.76161 2.60545 6.23839 2.89821 6.53036L4.6125 8.24464C4.90446 8.53661 5.38125 8.53661 5.67321 8.24464L9.10179 4.81607Z"
            fill={BaseStyles.Color.Beige3}
            id={id}
          />
        )}
      </svg>
      <MarginBox marginRight="1rem" />
      <div onClick={() => {
        if(id !== undefined){
          console.log(id);
          dispatch(deleteUserPlan({ username, id }))
          .then(() => dispatch(fetchUserPlanByUsername(username)))
        }
      }}>
        <Text
          innerText={detail}
          color="white"
          fontSize={BaseStyles.Text.Heading4}
        />
      </div>
    </Flex>
  );
};
