var SurveyQuestionWizard = React.createClass({
	// getInitialState: function(){
	// 	return {
	// 		question: 'question',
	// 		choice: ['A', 'B', 'C']
	// 	};
	// },
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
			offset: 0
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
		console.log('offset:', this.state);
	},
	render: function () {
		return <div>
					<SurveyQuestionWizard 
						question={this.questions[this.state.offset].text} 
						choice={this.questions[this.state.offset].choice} />
					<button onClick={this.onClickHandler}>Next</button>
				</div>
	}
});

module.exports = SurveyWizard;
