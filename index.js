document.addEventListener('DOMContentLoaded', () => {
	controlCarousel();
	setUpOrgChart();
});

function controlCarousel() {
	let items = document.querySelectorAll('.carousel .institution');
	console.log('items', items);
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
	console.log('height:', window.innerWidth);
	const orgData = [
		{
			id: '0',
			parentId: '',
			name: 'Claudio Álvarez',
			rol: 'BDFL',
			info: 'Profesor Asociado UANDES',
			image: './assets/team-pictures/claudio_alvarez.jpg',
			_expanded: true,
		},
		{
			id: '1',
			parentId: '0',
			name: 'Gustavo Zurita',
			rol: 'Director Científico',
			info: 'Profesor Titular U.Chile',
			image: './assets/team-pictures/gustavo_zurita.jpg',
			_expanded: true,
		},
		{
			id: '2',
			parentId: '1',
			name: 'Ignacio Garcés',
			rol: 'Mantenedor',
			info: 'Memorista Ing. Civil Computación UANDES',
			image: './assets/team-pictures/ignacio_garces.jpg',
			_expanded: true,
		},
		{
			id: '3',
			parentId: '2',
			name: 'Miguel Barraza',
			rol: 'Mantenedor Trainee',
			info: 'Memorista Ing. Civil Computación UANDES',
			image: './assets/team-pictures/miguel_barraza.jpg',
			_expanded: true,
		},
		{
			id: '4',
			name: 'Javier Soto',
			parentId: '3',
			rol: 'Desarrollador Front-End',
			info: 'Memorista Ing. Civil Computación UANDES',
			image: './assets/team-pictures/javier_soto.jpg',
			_expanded: true,
		},
		{
			id: '5',
			name: 'Joaquín Gracia',
			parentId: '3',
			rol: 'Desarrollador Back-End',
			info: 'Memorista Ing. Civil Computación UANDES',
			image: './assets/team-pictures/joaquin_gracia.jpg',
			_expanded: true,
		},
		{
			id: '6',
			name: 'Natalia Espinola',
			parentId: '3',
			rol: 'Desarrolladora Back-End',
			info: 'Memorista Ing. Civil Computación UANDES',
			image: './assets/team-pictures/natalia_espinola.jpg',
			_expanded: true,
		},
		{
			id: '7',
			name: 'Matías Rivera',
			parentId: '3',
			rol: 'Desarrollador Front-End',
			info: 'Memorista Ing. Civil Computación UANDES',
			image: './assets/team-pictures/matias_rivera.jpg',
			_expanded: true,
		},
		{
			id: '9',
			name: 'Vicente Gana',
			parentId: '3',
			rol: 'Desarrollador Back-End',
			info: 'Memorista Ing. Civil Computación UANDES',
			image: './assets/team-pictures/vicente_gana.jpg',
			_expanded: true,
		},
	];
	const chart = new d3.OrgChart();
	chart
		.scaleExtent([1, 1]) //* disable zoom
		.layout('left')
		.container('#chart-div')
		.compact(false)
		.data(orgData)
		.nodeHeight((d) => 85)
		.nodeWidth((d) => {
			return 200;
		})
		.childrenMargin((d) => 50)
		.compactMarginBetween((d) => 25)
		.compactMarginPair((d) => 50)
		.neighbourMargin((a, b) => 25)
		.siblingsMargin((d) => 25)
		.buttonContent(({ node, state }) => {
			return `<div style="px;color:#716E7B;border-radius:5px;padding:4px;font-size:10px;margin:auto auto;background-color:white;border: 1px solid #E4E2E9"> <span style="font-size:9px">${
				node.children
					? `<i class="fas fa-angle-up"></i>`
					: `<i class="fas fa-angle-down"></i>`
			}</span> ${node.data._directSubordinates}  </div>`;
		})
		.linkUpdate(function (d, i, arr) {
			d3.select(this)
				.attr('stroke', (d) =>
					d.data._upToTheRootHighlighted ? '#152785' : '#E4E2E9',
				)
				.attr('stroke-width', (d) => (d.data._upToTheRootHighlighted ? 5 : 1));

			if (d.data._upToTheRootHighlighted) {
				d3.select(this).raise();
			}
		})
		.nodeContent((d) => setNodeContent(d))
		.nodeUpdate(function (d) {
			// <- normal function

			d3.select(this) // This refers to each node DOM element, including your nodeContent
				.select('#yourButton') // your node content
				.on('click', () => {
					const memberData = d.data;
					let modalMemberName = document.getElementById('member-name');
					let modalMemberPicture = document.getElementById('member-picture');
					let modalMemberRol = document.getElementById('member-rol');
					let modalMemberInfo = document.getElementById('member-info');
					modalMemberName.innerText = memberData.name;
					modalMemberPicture.src = memberData.image;
					modalMemberRol.innerText = memberData.rol;
					modalMemberInfo.innerText = memberData.info;
				});
		})
		.render();
	d3.select(chart.container()) //* disable panning
		.select('svg')
		.on('mousedown.zoom', null)
		.on('touchstart.zoom', null)
		.on('touchmove.zoom', null)
		.on('touchend.zoom', null)
		.on('mousewheel.zoom', null);
}

function setOrgChartData() {
	let viewPort = window.innerWidth;
	let chartParams = {
		layout: 'top',
	};
	if (viewPort < 1200) {
	}
}

function setNodeContent(nodeData, index = '', arr = '', state = '') {
	const color = '#FFFFFF';
	return `
            <div id="node-content" style="font-family: 'Inter', sans-serif;background-color:${color}; position:absolute;margin-top:-1px; margin-left:-1px;width:${
		nodeData.width
	}px;height:${nodeData.height}px;border-radius:10px;border: 1px solid #E4E2E9">
               <div style="background-color:${color};position:absolute;margin-top:-25px;margin-left:${15}px;border-radius:100px;width:50px;height:50px;" ></div>
               <img src=" ${
									nodeData.data.image
								}" style="position:absolute;margin-top:-20px;margin-left:${20}px;border-radius:100px;width:40px;height:40px;" />
								<div style="color:#08011E;position:absolute;right:20px;top:10px;font-size:10px;"><img src="./assets/icons/dots-icon.svg" style="width:1.5em" id='yourButton'  data-bs-toggle="modal" data-bs-target="#exampleModal"></div>

              <div style="font-size:15px;color:#08011E;margin-left:20px;margin-top:32px"> ${
								nodeData.data.name
							} </div>
              <div style="color:#716E7B;margin-left:20px;margin-top:3px;font-size:10px;"> ${
								nodeData.data.rol
							} </div>
           </div>
  `;
}
