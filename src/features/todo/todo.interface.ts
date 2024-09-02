export const Status = Object.freeze({ Outstanding: 0, Complete: 1 });

export interface Todo {
	description: string;
	created_at: Date;
	status: number;
}
