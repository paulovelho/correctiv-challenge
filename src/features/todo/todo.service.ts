import FeedService from "@/shared/services/feed.service";
import { reactive, isProxy, toRaw } from 'vue'
import type { Todo } from "./todo.interface";

class TodoServiceClass {
	public list: Todo[] = [];

	constructor() {}

	public getList(): Todo[] {
		return this.list;
	}

	public addTodo(desc: string) {
		const now = new Date();
		const item: Todo = {
			description: desc,
			status: 0, created_at: now,
		}
		this.list.push(item);
		return item;
	}

	public startList(l: Todo[]) {
		this.list = l;
	}
}

export const TodoService = reactive(new TodoServiceClass());
export const getTodoList = (): Todo[] => {
	let list = TodoService.getList();
	let raw: Todo[] = [];
	if(isProxy(list)) raw = toRaw(list);
	return raw;
}
