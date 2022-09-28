/*
유저가 자신의 계획을 수립하고 체크할 수 있도록하는 기능을 수행한다.
계획은 일간, 주간, 월간으로 나뉘고, 개발은 일간부터 진행한다.
주간 계획에는 주간계획과 해당 주에 있는 일간 계획들을 모두 띄워준다.
마찬가지로 월간 계획에는 해당 월에 있는 주간 계획과 일간 계획들을 모두 띄워준다.
기본적으로 user를 인자로 받는다.
- /daliyPlan : get / post / update(put) / delete
- /weeklyPlan : get / post / update(put) / delete
- /monthlyPlan : get / post / update(put) / delete
*/

import express from "express";
import mongoose from "mongoose";
import { 
    getPersonalPlans, 
    setNewPersonalPlan, 
    updatePersonalPlan, 
    deletePersonalPlan, 
} from "../controller/userPersonalPlanAPI";


const router = express.Router();

router.route('/:username/plans')
    .get(getPersonalPlans)
    .post(setNewPersonalPlan)
    .put(updatePersonalPlan)
    .delete(deletePersonalPlan);

/*
router.route("/:username/plans/:id")
    .get(getPlanElement)
    .post(setNewPlanElement)
    .patch(updatePlanElement)
    .delete(deletePlanElement)
*/ 
// 위 URL처럼 parameter로 Plan Element를 받는 방법밖에 없을까? JSON Body에 넣는 방법 같은 건 안될려나..
// 위 Plan Element의 CRUD 중 뭘 구현하고 뭘 빼야 할까 ..


export default router;