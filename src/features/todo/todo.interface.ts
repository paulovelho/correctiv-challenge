export const Status = Object.freeze({ Outstanding: 0, Complete: 1 });

export interface Todo {
	id: number;
	description: string;
	created_at: Date;
	status: number;
}
