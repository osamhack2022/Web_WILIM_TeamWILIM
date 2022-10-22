import { useSelector } from "react-redux"
import { Box } from "../components/atom/box";
import { Flex } from "../components/atom/flex";
import { MarginBox } from "../components/atom/marginBox";
import { Text } from "../components/atom/text";
import { BaseStyles } from "../components/theme";
import { ReducerType } from "../store/rootReducer";
import getFullDate from "./getFullDate";


const GetFasetestSchedule = () => {
    const dates = useSelector((state: ReducerType) => {
        if (state.userGoal.isQnet === false) return state.userGoal.isQnetFalseDate.items;
        return state.userGoal.dates;
    });
    const today = getFullDate();
    const getMinus = (date1: string, date2: string) => {
        const dateDiff = new Date(new Date(Number(date1.substring(0, 4)), Number(date1.substring(4, 6)), Number(date1.substring(6, 8))).getTime() - new Date(Number(date2.substring(0, 4)), Number(date2.substring(4, 6)), Number(date2.substring(6, 8))).getTime());
        return dateDiff.getUTCDate();
    }
    let dDay;
    for (let i = 0; i < dates!.length; i++) {
        if (Number(dates![i].docRegStartDt) >= Number(today)) {
            dDay = {
                description: dates![i].description,
                schedule: "- 필기시험 원서접수 시작",
                dateDiff: getMinus(dates![i].docRegStartDt, today)
            }
            break;
        } else if (Number(dates![i].docRegEndDt) >= Number(today)) {
            dDay = {
                description: dates![i].description,
                schedule: "- 필기시험 원서접수 종료",
                dateDiff: getMinus(dates![i].docRegEndDt, today)
            }
            break;
        } else if (Number(dates![i].docExamStartDt) >= Number(today)) {
            dDay = {
                description: dates![i].description,
                schedule: "- 필기시험 시작",
                dateDiff: getMinus(dates![i].docExamStartDt, today)
            }
            break;
        } else if (Number(dates![i].docPassDt) >= Number(today)) {
            dDay = {
                description: dates![i].description,
                schedule: "- 필기시험 합격발표",
                dateDiff: getMinus(dates![i].docPassDt, today)
            }
            break;
        } else if (dates![i].pracRegStartDt !== undefined) {
            if (Number(dates![i].pracRegStartDt) >= Number(today)) {
                dDay = {
                    description: dates![i].description,
                    schedule: "- 실기(작업)/면접 원서접수 시작",
                    dateDiff: getMinus(dates![i].pracRegStartDt!, today)
                }
                break;
            } else if (Number(dates![i].pracRegEndDt) >= Number(today)) {
                dDay = {
                    description: dates![i].description,
                    schedule: "- 실기(작업)/면접 원서접수 종료",
                    dateDiff: getMinus(dates![i].pracRegEndDt!, today)
                }
                break;
            } else if (Number(dates![i].pracExamStartDt) >= Number(today)) {
                dDay = {
                    description: dates![i].description,
                    schedule: "- 실기(작업)/면접 시작",
                    dateDiff: getMinus(dates![i].pracExamStartDt!, today)
                }
                break;
            } else if (Number(dates![i].pracExamEndDt) >= Number(today)) {
                dDay = {
                    description: dates![i].description,
                    schedule: "- 실기(작업)/면접 종료",
                    dateDiff: getMinus(dates![i].pracExamEndDt!, today)
                }
                break;
            } else if (Number(dates![i].pracPassDt) >= Number(today)) {
                dDay = {
                    description: dates![i].description,
                    schedule: "- 실기(작업)/면접 결과발표",
                    dateDiff: getMinus(dates![i].pracPassDt!, today)
                }
                break;
            } else {
                dDay = {
                    description: "현재 예정되어있는 회차가 없어요...",
                    schedule: "",
                    dateDiff: 0
                }
            }
        } else {
            dDay = {
                description: "현재 예정되어있는 회차가 없어요...",
                schedule: "- 현재 예정되어있는 회차가 없어요...",
                dateDiff: 0
            }
        }
    }
    return (
        <Box
            width="calc(100% - 2rem)"
            borderRadius="0 0 6px 6px"
            backgroundColor={BaseStyles.Color.Red1}
        >
            <Flex flexDirection="column" alignItems="center">
                <Text
                    innerText={`D - ${dDay?.dateDiff}`}
                    color="white"
                    fontSize={BaseStyles.Text.Heading2}
                    fontWeight={BaseStyles.Text.Border2}
                />
                <MarginBox marginBottom="0.5rem" />
                <Text
                    innerText={`${dDay?.description} ${dDay?.schedule}`}
                    color="white"
                    fontSize={BaseStyles.Text.Heading4}
                    fontWeight={BaseStyles.Text.Border1}
                />
            </Flex>
        </Box>
    )
}

export default GetFasetestSchedule;