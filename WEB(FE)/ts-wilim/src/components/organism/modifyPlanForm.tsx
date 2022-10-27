import { useState } from "react"
import { List } from "../../schema/plan"
import { Button } from "../atom/button"
import { Flex } from "../atom/flex"
import { Input } from "../atom/input"
import { Line } from "../atom/line"
import { MarginBox } from "../atom/marginBox"
import { Text } from "../atom/text"
import { Plan } from "../molecule/plan"
import { BaseStyles } from "../theme"

export const ModifyPlanForm = ({ _id, detail, steady, completed }: List) => {
    const initialForm = { _id, detail, steady, completed };
    const [newPlanForm, setNewPlanForm] = useState<typeof initialForm>(initialForm);
    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setNewPlanForm({ ...newPlanForm, [name]: value });
        console.log(newPlanForm);
      };
    return (
        <>
            <Flex justifyContent="center" alignItems="center">
                <Text innerText="Modify Plan" color="white"
                    fontSize={BaseStyles.Text.Heading2}
                    fontWeight={BaseStyles.Text.Border0} />
                <MarginBox marginLeft="24px" />
            </Flex>
            <MarginBox marginBottom="1.5rem" />
            <Flex justifyContent="center" alignItems="center">
                <Line width="100%" height="0.5px" color="#767676" />
            </Flex>
            <MarginBox marginBottom="2.5rem" />
            <Flex flexDirection="column" alignItems="flex-start">
                <Text innerText="Detail" color="white"
                    fontSize={BaseStyles.Text.Heading3}
                    fontWeight={BaseStyles.Text.Border0} />
                <MarginBox marginBottom="0.5rem" />
                <Input type="text" width="calc(100% - 2rem)" name="detail" value={newPlanForm.detail} onChange={(e) => handleChange(e)} style={{ background: "none", border: "none", boxShadow: "none" }} />
                <Line width="100%" height="1px" color="#bbbbbb" />
                <MarginBox marginBottom="2rem" />
                <Plan detail="Steady?" completed={newPlanForm.steady} onClick={() => setNewPlanForm(prev => ({ ...prev, steady: !newPlanForm.steady }))} id="steady" />
                <MarginBox marginBottom="0.5rem" />
                <Plan detail="Completed?" completed={newPlanForm.completed} onClick={() => setNewPlanForm(prev => ({ ...prev, completed: !newPlanForm.completed }))} id="completed" />
                <MarginBox marginBottom="2rem" />
                <Flex justifyContent="center" alignItems="center" width="100%">
                    <Button
                        innerText="Add New Plan"
                        onClick={(e) => { {/**여기에 변경된 플랜 내용을 fetch하는 함수를 추가하자! */}}}
                        color="white"
                        backgroundColor={BaseStyles.Color.Orange2}
                        hoverColor={BaseStyles.Color.Orange3}
                        width="60%"
                    />
                </Flex>
                <MarginBox marginBottom="1rem" />
            </Flex>
        </>
    )
}