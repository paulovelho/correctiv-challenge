<script setup lang="ts">
import TodoItem from './TodoItem.vue';
</script>

<script lang="ts">
import { ref } from "vue";
import { TodoService, getTodoList } from "@/features/todo/todo.service";

export default {
	setup() {
		defineExppose({
			reload: this.updateList()
		});
	},
	emits: ['on-edit', 'on-delete', ],
	methods: {
		updateList() {
			console.info("list update");
			this.list = getTodoList();
		},
		editClick(todo) {
			this.$emit("on-edit", todo);
		},
		deleteClick(todo) {
			console.info("deleteing", todo);
			TodoService.deleteTodo(todo.id);
			this.$emit("on-delete", todo);
			this.updateList();
		}
	},
	data() {
		this.updateList();
		return {
			list: getTodoList(),
			wipFilter: (t) => t.status == 0,
			doneFilter: (t) => t.status == 1,
		}
	},
}
</script>

<template>
	<div>
		<div>
			<TodoItem
				v-for="(todo, index) in list"
				:key="todo.id"
				:item="todo"
				@on-edit="editClick" @on-delete="deleteClick" />
		</div>
		<div class="flex w-full my-2">
			<span class="flex-auto wip">{{list.filter(wipFilter).length}} Outstanding tasks</span>
			<span class="flex-auto done">{{list.filter(doneFilter).length}} Complete tasks</span>
		</div>
	</div>
</template>
