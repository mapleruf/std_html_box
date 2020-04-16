window.onload = function() {
	var align = document.getElementsByClassName('text-align');
	for (var i = 0; i < align.length; i++) {
		align[i].addEventListener('change', function() {
			var children = this.parentNode.nextElementSibling.children;
			for (var j = 0; j < children.length; j++) {
				children[j].style.textAlign = this.value;
			}
		});
	}

	var width = document.getElementsByClassName('width');
	for (var i = 0; i < width.length; i++) {
		width[i].addEventListener('change', function() {
			var children = this.parentNode.nextElementSibling.children;
			for (var j = 0; j < children.length; j++) {
				children[j].style.width = this.value;
			}
		});
	}

	var height = document.getElementsByClassName('height');
	for (var i = 0; i < height.length; i++) {
		height[i].addEventListener('change', function() {
			var children = this.parentNode.nextElementSibling.children;
			for (var j = 0; j < children.length; j++) {
				children[j].style.height = this.value;
			}
		});
	}

	var vertical = document.getElementsByClassName('vertical-align');
	for (var i = 0; i < vertical.length; i++) {
		vertical[i].addEventListener('change', function() {
			var children = this.parentNode.nextElementSibling.children;
			for (var j = 0; j < children.length; j++) {
				children[j].style.verticalAlign = this.value;
			}
		});
	}

	var line = document.getElementsByClassName('line-height');
	for (var i = 0; i < line.length; i++) {
		line[i].addEventListener('change', function() {
			var children = this.parentNode.nextElementSibling.children;
			for (var j = 0; j < children.length; j++) {
				children[j].style.lineHeight = this.value;
			}
		});
	}
}