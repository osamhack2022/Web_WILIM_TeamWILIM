interface fileInfo {
    fileNm: "공개문제 링크를 찾을 수 없습니다." | string;
    fileSn: number | string | null;
    fileUrl: "공개문제 링크를 찾을 수 없습니다." | string;
    _id: string;
}

export interface RoundInfo {
    implYy: string;
    implSeq?: number;
    qualgbCd?: string;
    qualgbNm?: string;
    description: string;
    docRegStartDt: string;
    docRegEndDt: string;
    docExamStartDt: string;
    docExamEndDt: string;
    docPassDt: string;
    pracRegStartDt?: string;
    pracRegEndDt?: string;
    pracExamStartDt?: string;
    pracExamEndDt?: string;
    pracPassDt?: string;
    _id?: string;
}

export interface Goal {
    dateUrl: string;
    description: Description | null;
    isQnet: boolean;
    isQnetFalseDate: {
        items: RoundInfo[];
    };
    mdobligfldnm: string | null;
    mockLink: fileInfo[];
    name: string;
    obligfldnm: string | null;
    qualgbnm: string | null;
    seriesnm: string | null;
    users: string[];
    _id: string;
    dates?: RoundInfo[];
}

export interface GoalDatas extends Goal {
    __v: number;
}

export interface Description {
    career: string;
    engJmNm?: string;
    hist: string;
    implNm: string;
    instiNm: string;
    jmCd: number | "";
    jmNm: string;
    job: string;
    mdobligFldNm: string;
    seriesCd: number | "";
    seriesNm: string;
    summary: string;
    trend: string;
}