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
			this.giveMeTodo("bootstrap app", 1),
			this.giveMeTodo("create task component", 0),
			this.giveMeTodo("create task liks", 0),
			this.giveMeTodo("deploy", 0),
		];
	}

	private giveMeTodo(
		description:string,
		status: number,
		creation?: Date,
	): Todo {
		if(!creation) {
			creation = new Date();
		}
		return {
			description, status,
			created_at: creation,
		};
	}


}