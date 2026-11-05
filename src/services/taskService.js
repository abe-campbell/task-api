import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks(completed) {
  let isCompleted;
  if (completed !== undefined) {
    if (typeof completed === 'boolean') {
      isCompleted = completed;
    } else if (completed === 'true') {
      isCompleted = true;
    } else if (completed === 'false') {
      isCompleted = false;
    }
  }
  return taskRepository.findAll(isCompleted);
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}
