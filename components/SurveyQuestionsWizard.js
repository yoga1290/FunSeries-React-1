var SurveyQuestionWizard = React.createClass({
	render: function () {
		return <div>{this.props.question}<br/>
					{this.props.choice.map(function(obj,i){
						return <div key={i}><input type="checkbox"  value={i}/> {obj}</div>;
					})}
		</div>;
	}
});

var SurveyQuestionsWizard = React.createClass({
	getInitialState: function(){
		return {
			offset: -1
		};
	},
	questions: [{
		text: 'question#1',
		choice: ['A', 'B', 'C']
	}, {
		text: 'question#2',
		choice: ['A', 'B', 'C']
	}],
	onClickHandler: function() {
		this.setState({
			offset: this.state.offset + 1,
		});
	},
	render: function () {
		if (this.state.offset < 0) {
			return <button onClick={this.onClickHandler}>Start</button>;
		} else if (this.state.offset < this.questions.length) {
			return <div>
						<SurveyQuestionWizard 
							question={this.questions[this.state.offset].text} 
							choice={this.questions[this.state.offset].choice} />
						<button onClick={this.onClickHandler}>Next</button>
					</div>;
		} else {
			return <button>Submit</button>;
		}
	}
});

module.exports = SurveyQuestionsWizard;
