var TabBox = {				//객체로 모듈화 많이 시킨다?
	_onTabClicked: function() {
		$('.tab-box li.selected').removeClass('selected');
		$(this).addClass('selected');
	},

	_initialize: function(){
		$('.tab-box li').click(TabBox._onTabClicked)
	},

init: function() {
	// console.log(this);
	// $(function(){
	//	console.log(this);
	//	$('.tab-box li').click(TabBox.onTabClicked)}.bind(this)
	// );

	$(TabBox._initialize)
}
} 	