var SurveyQuestionWizard = React.createClass({
	getInitialState: function(){
		return {
			question: 'question',
			choice: ['A', 'B', 'C']
		};
	},
	render: function () {
		return <div>{this.state.question}<br/>
					{this.state.choice.map(function(obj,i){
						return <div key={i}><input type="checkbox"  value={i}/> {obj}</div>;
					})}
		</div>;
	}
});

var SurveyWizard = React.createClass({
	getInitialState: function(){
		return {
			questions: [{
				question: '',
				choice: ['A', 'B', 'C']
			}, {
				question: '',
				choice: ['A', 'B', 'C']
			}]
		};
	},
	render: function () {
		return <p>
					{this.state.questions.map(function(question,i){
						return <SurveyQuestionWizard question={question.question} choice={question.choice} />;
					})}
		</p>
	}
});

module.exports = SurveyWizard;
