import type { Todo } from "@/features/todo/todo.interface";
import { TodoService } from "@/features/todo/todo.service";

export default class FeedService {
	
	constructor() { }

	public populate() {
		const defaultList = this.getSomeTodos();
		TodoService.startList(defaultList);
	}

	public getSomeTodos(): Todo[]{
		return [
			this.giveMeTodo(1, "bootstrap app", 1),
			this.giveMeTodo(2, "create task component", 0),
			this.giveMeTodo(3, "create task list", 1),
			this.giveMeTodo(4, "deploy", 0),
		];
	}

	private giveMeTodo(
		id: number,
		description:string,
		status: number,
		creation?: Date,
	): Todo {
		if(!creation) {
			creation = new Date();
		}
		return {
			id, description, status,
			created_at: creation,
		};
	}


}