export interface ITodo{
  id: number;
  text: string;
  completed: boolean;
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
  tag: string;
}
export type FormData = Pick<ITodo,'text'|'dueDate'|'priority'|'tag'>