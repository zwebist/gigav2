import assessmentData from '@/data/assessments.json';

const getAssessmentData = (limit: number = 5) => {
    const data = assessmentData.slice(0, limit);
    return data;
};

const getAssessmentById = ({ id }: { id: number | string }) => {
    const data = assessmentData.filter((asses) => asses.id == id);
    return data;
};

const getAssessmentByIdandListType = ({ id, ListType }: { id: number | string; ListType: string }) => {
    const data = assessmentData.filter((asses) => asses.id == id)[0]?.assessmentList.filter((list) => list.type == ListType);
    if (data) {
        return assessmentData.filter((asses) => asses.id == id);
    }
    return data;
};

export { getAssessmentData, getAssessmentById, getAssessmentByIdandListType };
