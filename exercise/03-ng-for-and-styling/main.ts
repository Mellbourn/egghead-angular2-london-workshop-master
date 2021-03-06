import {Component, bootstrap} from "angular2/angular2";
import {Table} from "./table"

@Component({
    selector: `app`,
	directives: [Table],
    template: `
		<table></table>
	`
})
class App {}

bootstrap(App).then(
    success => console.log('app starting...'),
    error => console.log(error)
);;