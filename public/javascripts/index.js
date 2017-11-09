(function ()	{
	$.ajax({
		type: 'get',
		url: '/files/xyplot',
		success: function (d)	{
			var xy = xyplot();

			xy({
				width: 600,
				height: 400,
				data: d.data,
				element: '#main',
				margin: [40, 40, 40, 40],
			});
		},
		error: function (err)	{
			console.log(err)
		},
	});
})();