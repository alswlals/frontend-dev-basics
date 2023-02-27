imageViewer = {
	

	init: function() {
		for(var i = 0; i < 100; i++){
			this._changeImage()
		}
		// $(imageViewer._initialize)
	},
	
	_changeImage:function(){
		var index = Math.floor(Math.random()*this._images.length);
		console.log(index);
	},
	
	intervalId:null,

	_images: [{
		name: '국화',
		file: 'Chrysanthemum.jpg'
	}, {
		name: '사막',
		file: 'Desert.jpg'
	}, {
		name: '수국',
		file: 'Hydrangeas.jpg'
	}, {
		name: '젤리피쉬',
		file: 'Jellyfish.jpg'
	}, {
		name: '튤립',
		file: 'Tulips.jpg'
	}, {
		name: '코알라',
		file: 'Koala.jpg'
	}, {
		name: '등대',
		file: 'Lighthouse.jpg'
	}, {
		name: '펭귄',
		file: 'Penguins.jpg'
	}]

	
}

// 슬라이드쇼 + 이미지 클릭 시 변경되게 끔 
// 슬라이드쇼 시작 누르면 정지로 바뀌고 자동으로 이미지바뀌기 (btn-slideshow 의 텍스트 변경)