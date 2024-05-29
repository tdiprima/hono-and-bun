import { Hono } from 'hono'
import { logger } from 'hono/logger'

const app = new Hono()
const file = Bun.file("src/todos.json");
const todos = await file.json();

app.use(logger())

app.get('/', (c) => {
  return c.text('Hello Hono!')
  // return c.html('<h1>Hello Hono!</h1>')
  // return c.json({ message: 'Hello Hono!' })
})
.get('/hello/:name', (c) => {
  const name = c.req.param('name')
  return c.text(`Hello ${name}!`)
})
.get('/todos', (c) => {
  return c.json(todos);
})
.get('/todos/:id', (c) => {
  const id = Number(c.req.param('id'));
  const todo = todos.find((todo: any) => todo.id === id);
  return c.json(todo);
})
.delete('/todos/:id', async (c) => {
  const id = Number(c.req.param('id'));
  todos.splice(
    todos.findIndex((todo: any) => todo.id === id), 
    1
  )    
  await Bun.write('todos.json', JSON.stringify(todos));
  return c.json(todos);
})
.patch('/todos/toggle/:id', async (c) => {
  const id = Number(c.req.param('id'));
  const todo = todos.find((todo: any) => todo.id === id);
  todo.completed = !todo.completed;
  await Bun.write('todos.json', JSON.stringify(todos));
  return c.json(todo);
})
.patch('/todos/edit/title/:id', async (c) => {
  const id = Number(c.req.param('id'));
  const body = await c.req.json();
  const todo = todos.find((todo: any) => todo.id === id);

  if (!todo) {
    return c.json({ error: 'Todo not found' }, 404);
  }

  todo.title = body.title;
  await Bun.write('todos.json', JSON.stringify(todos));
  return c.json(todo);
})
.patch('/todos/edit/title2', async (c) => {
  const body = await c.req.json();
  const todo = todos.find((todo: any) => 
    todo.title.toLowerCase().includes(body.search.toLowerCase())
);
  todo.title = body.title;
  await Bun.write('todos.json', JSON.stringify(todos));
  return c.json(todo);
})
.post('/todos', async (c) => {
  const body = await c.req.json();
  todos.push(body);
  await Bun.write('todos.json', JSON.stringify(todos));
  return c.json(todos);
})

export default app
