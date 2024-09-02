<script setup lang="ts">
import TodoItem from './TodoItem.vue';
</script>

<script lang="ts">
import { TodoService, getTodoList } from "@/features/todo/todo.service";

export default {
	setup() {
		defineExppose({
			reload: this.updateList()
		});
	},
	methods: {
		updateList() {
			const todos = getTodoList();
			console.info("todos", todos);
			this.list = todos;
		}
	},
	data() {
		this.updateList();
		return { list: this.list }
	}
}
</script>

<template>
	<div>
		<div v-for="todo in list">
			<TodoItem :item="todo" />
		</div>
	</div>
</template>
