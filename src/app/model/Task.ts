import { Category } from "./Category";
import { Priority } from "./Priority";

export class Task{
    Id: number;
    Title: string;
    Completed: boolean;
    Priority?: Priority;
    Category?: Category;
    Date?: Date;

    constructor(id: number, title: string, completed:boolean, priority?: Priority, category?:Category, date?:Date){
        this.Id = id;
        this.Title = title;
        this.Completed = completed;
        this.Priority = priority;
        this.Category = category;
        this.Date = date;
    }
}