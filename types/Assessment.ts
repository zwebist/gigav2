interface AssessmentSubItem {
    id: number;
    imageUrl: string;
    shortDescription: string;
  }
  
  interface AssessmentItem {
    id: number;
    type: string;
    date: string;
    rating: string;
    shortDescription: string;
    assessmentSubList: AssessmentSubItem[];
  }
  
  interface Assessment {
    id: number;
    authorName: string;
    shortDescription: string;
    authorImageUrl: string;
    date: string;
    category: string;
    rating: string;
    assessmentList: AssessmentItem[];
  }
  