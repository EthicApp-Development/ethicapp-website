document.addEventListener('DOMContentLoaded', () => {
	controlCarousel();
	setUpOrgChart();
});

function controlCarousel() {
	let items = document.querySelectorAll('.carousel .carousel-item');

	items.forEach((el) => {
		const minPerSlide = 4;
		let next = el.nextElementSibling;
		for (var i = 1; i < minPerSlide; i++) {
			if (!next) {
				// wrap carousel by using first child
				next = items[0];
			}
			let cloneChild = next.cloneNode(true);
			el.appendChild(cloneChild.children[0]);
			next = next.nextElementSibling;
		}
	});
}

function setUpOrgChart() {
	const chartSeries = [
		{
			points: [
				{
					id: 'claudio',
					name: 'Claudio Álvarez',
					attributes: {
						position: '<span style="font-size:13px;">BDFL</span>',
						photo: './assets/team-pictures/claudio_alvarez.jpg',
					},
				},
				{
					id: 'ignacio',
					name: 'Ignacio Garcés',
					parent: 'claudio',
					attributes: {
						position: '<span style="font-size:13px;">Mantenedor</span>',
						photo: './assets/team-pictures/ignacio_garces.jpg',
					},
				},
				{
					id: 'miguel',
					name: 'Miguel Barraza',
					parent: 'ignacio',
					attributes: {
						position: '<span style="font-size:13px;">Mantenedor Trainee</span>',
						photo: './assets/team-pictures/miguel_barraza.jpg',
					},
				},
				{
					id: 'javier',
					name: 'Javier Soto',
					parent: 'miguel',
					attributes: {
						position:
							'<span style="font-size:13px;">Desarrollador Front-End</span>',
						photo: './assets/team-pictures/javier_soto.jpg',
					},
				},
				{
					id: 'joaquin',
					name: 'Joaquín Gracia',
					parent: 'miguel',
					attributes: {
						position:
							'<span style="font-size:13px;">Desarrollador Back-End</span>',
						photo: './assets/team-pictures/joaquin_gracia.jpg',
					},
				},
				{
					id: 'natalia',
					name: 'Natalia Espinola',
					parent: 'miguel',
					attributes: {
						position:
							'<span style="font-size:13px;">Desarrolladora Back-End</span>',
						photo: './assets/team-pictures/natalia_espinola.jpg',
					},
				},
				{
					id: 'matias',
					name: 'Matías Rivera',
					parent: 'miguel',
					attributes: {
						position:
							'<span style="font-size:13px;">Desarrollador Front-End</span>',
						photo: './assets/team-pictures/matias_rivera.jpg',
					},
				},
				{
					id: 'vicente',
					name: 'Vicente Gana',
					parent: 'miguel',
					attributes: {
						position:
							'<span style="font-size:13px;">Desarrollador Back-End</span>',
						photo: './assets/team-pictures/claudio_alvarez.jpg',
					},
				},
			],
		},
	];
	const chart = new JSC.Chart('chart_div', {
		debug: true,
		type: 'organizational straight right',
		defaultTooltip_enabled: false,
		defaultPoint: {
			focusGlow: false,
			connectorLine: { width: 1, color: '#e0e0e0' },
			annotation: {
				label: {
					text: '<b>%position</b><br/>%name<br><img margin_left=-55 margin_top=-33 width=50 height=50 src=%photo style="border-radius: 50%">',
					autoWrap: false,
					color: 'slategray',
					style: {
						fontWeight: 'normal',
						fontSize: 10,
					},
					align: 'left',
					margin_left: 50,
				},
				padding: [4, 14, 4, 0],
				corners: 'square',
				height: 52,
				radius: 33,
				margin: [2, 15, 2, 0],
			},
			outline_color: '#e0e0e0',
			color: 'white',
		},
		series: chartSeries,
	});
}
