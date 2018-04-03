;
(function (window, TodoHeader, AppFooter, TodoMain,TodoFooter) {
	const template = `
	<div>
		<section class="todoapp">
			<todo-header></todo-header>
			<todo-main></todo-main>
			<todo-footer></todo-footer>
		</section>
		<app-footer></app-footer>
	</div>
	`
	const App = {
		template,
		components: {
			TodoHeader,
			AppFooter,
			TodoMain,
			TodoFooter,
		}
	}
	window.App = App
})(window, TodoHeader, AppFooter, TodoMain,TodoFooter);
