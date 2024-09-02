<script setup lang="ts">
import { ref,PropType, defineComponent } from 'vue';
import type { Todo } from "@/features/todo/todo.interface";
</script>

<script lang="ts">
export default {
	props: {
		item: { type: Object as PropType<Todo>, required: true }
	},
	data() {
		return { todo: this.item }; 
	}
}
</script>

<template>
	<div class="todo">
		<span class="desc">{{ todo.description }}</span>
		<div class="status" :class="{ 'complete': todo.status == 1 }">{{ todo.status == 1 ? "complete" : "outstanding" }}</div>
	</div>
</template>

<style lang="scss">
.todo {
	display: block;
	height: 40px;
	float: left;
	width: 100%;
	border: 1px solid black;
	margin: 2px auto;
	padding: 5px;
	.status {
		display: inline-block;
		float: right;
		padding: 2px 10px;
		background-color: yellow;
		width: 120px;
		text-align: center;
		border-radius: 4px;
		&.complete {
			background-color: green;
			color: white;
		}
	}
}
</style>
