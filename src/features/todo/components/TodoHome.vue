<script setup lang="ts">
import TodoNew from './TodoNew.vue';
import TodoList from './TodoList.vue';
import TodoForm from './TodoForm.vue';
</script>

<script lang="ts">
import { TodoService, getTodoList } from "@/features/todo/todo.service";

export default {
	methods: {
		created(newItem) {
			console.info("created ", newItem);
		},
		select(todo) {
			this.selected = todo;
		},
		saved(todo) {
			this.selected = null;
		}
	},
	data() {
		return {
			selected: null,
		}
	}
}
</script>

<template>
	<div class="flex flex-col">
		<TodoNew @on-create="created" />
		<TodoList @on-edit="select" />
		<TodoForm
			v-if="selected != null"
			:item="selected"
			@on-save="saved"
		/>
	</div>
</template>
