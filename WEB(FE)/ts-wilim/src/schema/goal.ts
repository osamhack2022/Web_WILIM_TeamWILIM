interface fileInfo {
    fileNm: "공개문제 링크를 찾을 수 없습니다." | string;
    fileSn: string | null;
    fileUrl: "공개문제 링크를 찾을 수 없습니다." | string;
    _id: string;
}

export interface RoundInfo {
    implYy: string;
    implSeq: number;
    qualgbCd: string;
    qualgbNm: string;
    description: string;
    docRegStartDt: string;
    docRegEndDt: string;
    docExamStartDt: string;
    docExamEndDt: string;
    docPassDt: string;
    pracRegStartDt: string;
    pracRegEndDt: string;
    pracExamStartDt: string;
    pracExamEndDt: string;
    pracPassDt: string;
}

export interface Goal {
    dateUrl: string;
    description: string;
    isQnet: boolean;
    isQnetFalseDate: Object;
    mdobligfldnm: string;
    mockLink: fileInfo[];
    name: string;
    obligfldnm: string;
    qualgbnm: string;
    seriesnm: string;
    users: string[];
    _id: string;
    dates: RoundInfo[];
}