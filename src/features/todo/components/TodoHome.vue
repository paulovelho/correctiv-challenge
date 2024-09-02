<script setup lang="ts">
import TodoNew from './TodoNew.vue';
import TodoList from './TodoList.vue';
</script>

<script lang="ts">
import { TodoService, getTodoList } from "@/features/todo/todo.service";

export default {
	methods: {
		created(newItem) {
			console.info("created ", newItem);
		},
	},
	data() {
	}
}
</script>

<template>
	<div>
		<TodoNew @on-create="created" />
		<TodoList />
	</div>
</template>
