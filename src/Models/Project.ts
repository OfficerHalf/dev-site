export interface Project {
    name: string;
    icon: string;
    description: string;
    status: ProjectStatus;
    more: string;
    tagline: string;
}

export enum ProjectStatus {
    Ongoing = 'Ongoing',
    Complete = 'Complete',
    OnHold = 'On Hold'
}
