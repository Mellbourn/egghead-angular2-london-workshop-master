import {Component, FORM_DIRECTIVES, ControlGroup, Control, CORE_DIRECTIVES, Validators} from "angular2/angular2";

@Component({
	selector:'simple-form',
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
	template:`
	    <div>
		  <form [ng-form-model]="movie" (ng-submit)="onSubmit()">
		    <input type="text" ng-control="name">
		    <input type="color" ng-control="two">
		    <input type="checkbox" ng-control="isTrue">
			
			<select ng-control="select">
			  <option *ng-for="#o of selectOptions">{{o}}</option>
			</select>
			
		    <input type="submit" value="Submit">
			
		  </form>
		</div>
		<h1 *ng-if="!movie.valid">INVALID</h1>
		<div [ng-switch]="movie.value.select">
		  <template ng-switch-when="fire">Burn</template>
		  <template ng-switch-default>Select value</template>
		</div>
		{{movie.value | json}}
		`
})
export class SimpleForm{
	selectOptions = ["fire", "earth", "wind"]
	
		movie = new ControlGroup({
			name: new Control("Klas", Validators.required),
			two: new Control("#FFEEAA"),
			isTrue: new Control(true),
			select: new Control(this.selectOptions[0])
		})	
		
		onSubmit(){
			console.log(this.movie.value);
			console.log(this.movie.valid);
		}
}