import { useState } from "react"
import { useDispatch } from "react-redux"
import { newPlanToggle } from "../../store/slices/toggleSlice"
import { ArrowLeft } from "../atom/arrowLeft"
import { Button } from "../atom/button"
import { Flex } from "../atom/flex"
import { Input } from "../atom/input"
import { Line } from "../atom/line"
import { MarginBox } from "../atom/marginBox"
import { Text } from "../atom/text"
import { Plan } from "../molecule/plan"
import { BaseStyles } from "../theme"

export const NewPlanForm = () => {
    const dispatch = useDispatch();
    const initialForm = {
        detail: "",
        steady: false,
        completed: false,
    }
    const [newPlanForm, setNewPlanForm] = useState<typeof initialForm>(initialForm);
    return (
        <>
            <Flex justifyContent="space-evenly" alignItems="center">
                <div onClick={() => dispatch(newPlanToggle())}><ArrowLeft /></div>
                <Text innerText="New Plan" color="white"
                    fontSize={BaseStyles.Text.Heading2}
                    fontWeight={BaseStyles.Text.Border0} />
                <MarginBox marginLeft="24px" />
            </Flex>
            <MarginBox marginBottom="1.5rem" />
            <Flex justifyContent="center" alignItems="center">
                <Line width="50%" height="0.5px" color="#767676" />
            </Flex>
            <MarginBox marginBottom="2.5rem" />
            <Flex flexDirection="column" alignItems="flex-start">
                <Text innerText="Detail" color="white"
                    fontSize={BaseStyles.Text.Heading3}
                    fontWeight={BaseStyles.Text.Border0} />
                <MarginBox marginBottom="0.5rem" />
                <Input type="text" width="calc(100% - 2rem)" name="detail" style={{ background: "none", border: "none", boxShadow: "none" }} />
                <Line width="100%" height="1px" color="#bbbbbb" />
                <MarginBox marginBottom="2rem" />
                <Plan detail="Steady?" completed={newPlanForm.steady} onClick={() => setNewPlanForm(prev => ({ ...prev, steady: !newPlanForm.steady }))} id="steady" />
                <MarginBox marginBottom="0.5rem" />
                <Plan detail="Completed?" completed={newPlanForm.completed} onClick={() => setNewPlanForm(prev => ({ ...prev, completed: !newPlanForm.completed }))} id="completed" />
                <MarginBox marginBottom="2rem" />
                <Flex justifyContent="center" alignItems="center" width="100%">
                    <Button
                        innerText="Add New Plan"
                        onClick={(e) => { }}
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