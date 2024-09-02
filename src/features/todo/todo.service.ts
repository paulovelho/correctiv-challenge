import FeedService from "@/shared/services/feed.service";
import { reactive, isProxy, toRaw } from 'vue'
import type { Todo } from "./todo.interface";

class TodoServiceClass {
	public list: Todo[] = [];
	private lastId: number = 0;

	constructor() {}

	public getList(): Todo[] {
		return this.list;
	}

	public addTodo(desc: string) {
		this.lastId ++;
		const now = new Date();
		const item: Todo = {
			id: this.lastId,
			description: desc,
			status: 0, created_at: now,
		}
		this.list.push(item);
		return item;
	}

	public deleteTodo(id:number) {
		console.info("deleting ", id);
		this.list = this.list.filter((t) => t.id != id);
	}

	public startList(l: Todo[]) {
		this.list = l;
		this.lastId = l.length;
	}
}

export const TodoService = reactive(new TodoServiceClass());
export const getTodoList = (): Todo[] => {
	let list = TodoService.getList();
	let raw: Todo[] = [];
	if(isProxy(list)) raw = toRaw(list);
	return raw;
}
