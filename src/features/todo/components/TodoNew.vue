<script lang="ts">
import { TodoService } from "@/features/todo/todo.service";

export default {
	emits: ["on-create"],
	methods: {
		addTodo() {
			if(this.description == "") return;
			const service = TodoService;
			const createdTodo = service.addTodo(this.description);
			this.$emit("on-create", createdTodo);
			this.description = "";
		},
	},
	data() {
		return {
			description: "",
		};
	}
}
</script>

<template> 
	<div class="grid todo-form mx-auto">
		<div class="t t-input block">
			<label
				for="todo-title"
				class="block mb-2 text-sm font-medium text-gray-900">Description:</label>
			<input
				type="text"
				id="todo-title"
				class="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
				@input="event => description = event.target.value"
				v-model="description"
			/>
		</div>
		<div class="t block">
			<button
				class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
				@click="addTodo()"
			>
				Add
			</button>
		</div>
	</div>
</template>

<style lang="scss">
.grid {
	display: flex;
	width: 100%;
	margin: 30px 0;
}
.t {
	display: flex;
	padding: 10px;
	&.t-input {
		flex-grow: 1;
		label { 
			position: absolute;
			margin-top: -20px;
		}
	}
	input {
		width: 100%;
	}
}
button {
	background-color: aqua;
	border: 1px solid black;
	padding: 5px 10px;
}
</style>
