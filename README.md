# XY Plot
### installation & run

먼저 git 과 nodejs & npm 이 설치되어 있어야 한다.

- git clone https://github.com/subji/xyplot-for-bio.git 
- cd directory
- npm install
- node bin/www or npm install -g nodemon 후 nodemon bin/www 실행
- localhost:3000 <- 3000 은 
	bin 안에 www 에서 8000 을 3000 으로 변경하면 된다.

### data
- cd public/datas
- input data
- 단 현재 파일명은 'xyplot.json' 으로 해야 한다.
- data format:
	ex) 
	{
		data: {
			plot_list: [
				{
					title: "title",
					x: "x value",
					y: "y value",
				},
				...
			]
		}
	}

