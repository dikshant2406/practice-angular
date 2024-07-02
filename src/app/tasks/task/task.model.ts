import { WritableSignal } from "@angular/core";
export interface Task {
    id: string,
    userId: string,
    title: string,
    summary: string,
    dueDate: string,
}

export interface NewTask {
    title: WritableSignal<string>, 
    summary: string, 
    date: string
}
