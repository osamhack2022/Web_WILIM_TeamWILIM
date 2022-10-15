interface fileInfo {
    fileNm: "공개문제 링크를 찾을 수 없습니다." | string;
    fileSn: string | null;
    fileUrl: "공개문제 링크를 찾을 수 없습니다." | string;
    _id: string;
}

interface RoundInfo {
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
    ctf: {
        _id: string;
        name: string;
        qualgbnm: string;
        description: string;
        seriesnm: string;
        obligfldnm: string;
        mdobligfldnm: string;
        dateUrl: string;
        mockLink: fileInfo[];
        isQnet: boolean;
        users: string[];
    };
    date: {
        items: RoundInfo[];
    }
}