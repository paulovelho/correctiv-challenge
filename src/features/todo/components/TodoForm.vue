<script lang="ts">
import { TodoService } from "@/features/todo/todo.service";

export default {
	props: {
		item: { type: Object as PropType<Todo>, required: true }
	},
	emits: ['on-save'],
	methods: {
		update() {
			if(this.desc == "") return;
			this.$emit("on-save", this.item);
		}
	},
}
</script>

<template>
	<div class="flex todo-edit w-full mt-4">
		<div class="input">
			<input
				type="text"
				id="todo-desc"
				class="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" 
				v-model="item.description"
			/>
		</div>
		<div class="t block">
			<button
				class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
				@click="update()">
				Save
			</button>
		</div>
	</div>
</template>

<style lang="scss">
.todo-edit {
	div {
		display: flex;
		&.input {
			flex-grow: 1;
		}
	}
}
</style>