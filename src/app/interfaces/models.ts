// Interface para o Projeto
export interface Project {
  id: number;
  name: string;
  subProjects?: SubProject[];
  totalIssues?: number;
  totalIssuesGeral?: number;
  openedOnTime?: number;
  overdue?: number;
  closed?: number;
  closedOnTime?: number;
  closedLate?: number;
}

export interface SubProject {
  id: number;
  name: string;
}

// Interface para a Issue
export interface Issue {
  id: number;
  title: string;
  state: string; // Ex: 'opened', 'closed', 'in_progress', 'testing'
  labels: string[];
  due_date?: string; // Data de vencimento da issue, se houver
}

// Interface para o Status das Issues (contagem por estado)
export interface StatusCount {
  opened: number;
  closed: number;
}

export interface Label {
  id: number;
  name: string;
  color: string;
  text_color: string;
  description?: string;
}
