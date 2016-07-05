var SurveyQuestionWizard = React.createClass({
	getInitialState: function(){
		return {
			question: 'question',
			choice: ['A', 'B', 'C']
		};
	},
	render: function () {
		return <div>{this.props.question}<br/>
					{this.props.choice.map(function(obj,i){
						return <div key={i}><input type="checkbox"  value={i}/> {obj}</div>;
					})}
		</div>;
	}
});

var SurveyWizard = React.createClass({
	getInitialState: function(){
		return {
			offset: 0,
			questions: [{
				question: 'question#1',
				choice: ['A', 'B', 'C']
			}, {
				question: 'question#2',
				choice: ['A', 'B', 'C']
			}]
		};
	},
	onclick: function() {
		this.state.offset++;
		console.log('offset:', this.state.offset);
	},
	render: function () {
		return <p>
					<SurveyQuestionWizard question={this.state.questions[this.state.offset].question} choice={this.state.questions[this.state.offset].choice} />
					<button onclick={this.onclick()}>Next</button>
				</p>
	}
});

module.exports = SurveyWizard;
