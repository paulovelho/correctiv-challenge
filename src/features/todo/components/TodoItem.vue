<script setup lang="ts">
import { ref,PropType, defineComponent } from 'vue';
import moment from 'moment'
import type { Todo } from "@/features/todo/todo.interface";
</script>

<script lang="ts">
export default {
	props: {
		item: { type: Object as PropType<Todo>, required: true }
	},
	emits: ['on-edit', 'on-status-change', 'on-delete'],
	methods: {
		created(): string {
			if(!this.item) return "";
			return moment(String(this.item.created_at)).format('YYYY-MM-DD hh:mm:ss')
		},
		changeStatus(newStatus) {
			this.item.status = newStatus;
			this.$emit("on-status-change", this.item);
		},
		edit() {
			this.$emit("on-edit", this.item);
		},
		remove() {
			this.$emit("on-delete", this.item);
		}
	},
	data() {
		return { todo: this.item }; 
	}
}
</script>

<template>
	<div class="todo flex">
		<span class="desc">
			[#{{ todo.id }}] {{ todo.description }}
		</span>
		<div class="actions">
			<button v-if="todo.status == 0" @click="edit" class="bg-blue-300 hover:bg-blue-400 text-black-800 items-center">
				<i class="fas fa-edit"></i>
			</button>
			<button v-if="todo.status == 0" @click="() => changeStatus(1)" class="bg-green-300 hover:bg-green-400 text-black-800 items-center">
				<i class="fas fa-check-circle"></i>
			</button>
			<button v-if="todo.status == 1" @click="() => changeStatus(0)" class="bg-yellow-300 hover:bg-yellow-400 text-black-800 items-center">
				<i class="fas fa-times-circle"></i>
			</button>
			<button @click="remove" class="bg-red-300 hover:bg-red-400 text-black-800 items-center">
				<i class="fas fa-trash"></i>
			</button>
		</div>
		<div class="status" :class="{ 'complete': todo.status == 1 }">{{ todo.status == 1 ? "complete" : "outstanding" }}</div>
		<span class="date">
			{{ created() }}
		</span>
	</div>
</template>

<style lang="scss">
.todo {
	display: flex;
	height: 40px;
	float: left;
	width: 100%;
	border: 1px solid black;
	margin: 2px auto;
	padding: 5px;
	.desc {
		flex-grow: 1;
	}
	.date {
		font-size: 12px;
		margin-left: 5px;
	}
	.actions {
		display: inline-block;
		button {
			width: 30px;
			height: 30px;
			border-radius: 15px;
			padding: 0;
			margin: 0 2px;
		}
	}
	.status {
		display: inline-block;
		padding: 2px 10px;
		margin-left: 10px;
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
