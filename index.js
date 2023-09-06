document.addEventListener('DOMContentLoaded', () => {
	setUpOrgChart();
	addEventListener('resize', (event) => {
		setUpOrgChart();
		handleTeamCarousel();
	});
	handleTeamCarousel();
	controlCarousel();
});

function controlCarousel() {
	let items = document.querySelectorAll('.carousel .institution');
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

function handleTeamCarousel() {
	let viewPort = window.innerWidth;
	if (viewPort < 768) {
		//* if its mobile
		document.getElementById('team-else').classList.add('d-none');
		document.getElementById('team-mobile').classList.remove('d-none');
	} else {
		document.getElementById('team-else').classList.remove('d-none');
		document.getElementById('team-mobile').classList.add('d-none');
	}
}

function setUpOrgChart() {
	const orgData = setOrgChartData();
	const chartParams = setOrgChartParams();
	const chart = new d3.OrgChart();
	chart
		.scaleExtent([1, 1]) //* disable zoom
		.layout(chartParams.layout)
		.container('#chart-div')
		.compact(chartParams.compact)
		.data(orgData)
		.nodeHeight((d) => chartParams.nodeHeight)
		.nodeWidth((d) => {
			return chartParams.nodeWidth;
		})
		.rootMargin(80)
		.childrenMargin((d) => chartParams.childrenMargin)
		.compactMarginBetween((d) => chartParams.compactMarginBetween)
		.compactMarginPair((d) => chartParams.compactMarginPair)
		.neighbourMargin((a, b) => chartParams.neighbourMargin)
		.siblingsMargin((d) => chartParams.siblingsMargin)
		.buttonContent(({ node, state }) => {
			return `<div style="px;color:#716E7B;border-radius:5px;padding:4px;font-size:10px;margin:auto auto;background-color:white;border: 1px solid #E4E2E9"> <span style="font-size:9px">${
				node.children
					? `<i class="fas fa-angle-up"></i>`
					: `<i class="fas fa-angle-down"></i>`
			}</span> ${node.data._directSubordinates}  </div>`;
		})
		.linkUpdate(function (d, i, arr) {
			console.log('link update', d);
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
		.nodeUpdate(function (d) {})
		.setActiveNodeCentered(false)
		.render();
	if (chartParams.disablePanning) {
		d3.select(chart.container()) //* disable panning
			.select('svg')
			.on('mousedown.zoom', null)
			.on('touchstart.zoom', null)
			.on('touchmove.zoom', null)
			.on('touchend.zoom', null)
			.on('mousewheel.zoom', null);
	}
	return chart;
}

function setOrgChartData() {
	const orgData = [	
		{
			id: '0',
			parentId: '',
			name: 'Equipo EthicApp',
			rol: '2023-10',
			info: '',
			image: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
		},
		{
			id: '1',
			parentId: '0',
			name: '<a href="https://www.linkedin.com/in/claudioalvarezgomez/" target="_blank">Claudio Álvarez</a>',
			rol: 'Director de Ingeniería y BDFL',
			info: 'Prof. Asociado, Fac. Ingeniería<br>Universidad de los Andes, Chile<br>calvarez (at) uandes.cl',
			image: './assets/team-pictures/claudio_alvarez.jpg',
			_expanded: true,
		},
		{
			id: '2',
			parentId: '0',
			name: '<a href="https://cl.linkedin.com/in/gustavo-zurita-bb5a5244" target="_blank">Gustavo Zurita</a>',
			rol: 'Director Científico',
			info: 'Profesor Titular, <a href="http://dcs.uchile.cl" target=_blank>DCS</a><br>Universidad de Chile<br>gzurita (at) fen.uchile.cl',
			image: './assets/team-pictures/gustavo_zurita.jpg',
			_expanded: true,
		},
		{
			id: '3',
			parentId: '1',
			name: 'Ignacio Garcés',
			rol: 'Mantenedor Titular',
			info: 'Memorista Ing. Civil Computación UANDES',
			image: './assets/team-pictures/ignacio_garces.jpg',
			_expanded: true,
		},
		{
			id: '4',
			parentId: '3',
			name: 'Miguel Barraza',
			rol: 'Mantenedor',
			info: 'Memorista Ing. Civil Computación UANDES',
			image: './assets/team-pictures/miguel_barraza.jpg',
			_expanded: true,
		},
		{
			id: '5',
			name: 'Javier Soto',
			parentId: '3',
			rol: 'Desarrollador Frontend',
			info: 'Memorista Ing. Civil Computación UANDES',
			image: './assets/team-pictures/javier_soto.jpg',
			_expanded: true,
		},
		{
			id: '6',
			name: 'Joaquín Gracia',
			parentId: '3',
			rol: 'Desarrollador Backend',
			info: 'Memorista Ing. Civil Computación UANDES',
			image: './assets/team-pictures/joaquin_gracia.jpg',
			_expanded: true,
		},
		{
			id: '7',
			name: 'Natalia Espinola',
			parentId: '3',
			rol: 'Desarrolladora Backend',
			info: 'Memorista Ing. Civil Computación UANDES',
			image: './assets/team-pictures/natalia_espinola.jpg',
			_expanded: true,
		},
		{
			id: '8',
			name: 'Matías Rivera',
			parentId: '3',
			rol: 'Desarrollador Frontend',
			info: 'Memorista Ing. Civil Computación UANDES',
			image: './assets/team-pictures/matias_rivera.jpg',
			_expanded: true,
		},
		{
			id: '9',
			name: 'Vicente Gana',
			parentId: '3',
			rol: 'Desarrollador Backend',
			info: 'Memorista Ing. Civil Computación UANDES',
			image: './assets/team-pictures/vicente_gana.jpg',
			_expanded: true,
		},
	];
	return orgData;
}

function setOrgChartParams() {
	let viewPort = window.innerWidth;
	/*let chartParams = {
		layout: 'top',
		nodeHeight: 85,
		nodeWidth: 200,
		childrenMargin: 50,
		compactMarginBetween: 25,
		compactMarginPair: 50,
		neighbourMargin: 25,
		siblingsMargin: 25,
		disablePanning: false,
		compact: true,
	};*/

	let chartParams = {
		layout: 'top',
		nodeHeight: 100,
		nodeWidth: 220,
		childrenMargin: 100,
		compactMarginBetween: 80,
		compactMarginPair: 50,
		neighbourMargin: 100,
		siblingsMargin: 140,
		disablePanning: false,
		compact: true,
	};	

	if (viewPort >= 1200) {
		chartParams = {
			layout: 'top',
			nodeHeight: 70,
			nodeWidth: 180,
			childrenMargin: 140,
			compactMarginBetween: 150,
			compactMarginPair: 150,
			neighbourMargin: 25,
			siblingsMargin: 200,
			disablePanning: false,
			compact: true,
		};
	}	

	return chartParams;
}

function setNodeContent(nodeData, index = '', arr = '', state = '') {
	return `
            <div id="node-content" class="orgchart-node">
               <img class="orgchart-img" src=" ${nodeData.data.image}"/>
					
              <div style="font-size:15px;color:#08011E;margin-left:20px;margin-top:32px"> ${nodeData.data.name} </div>
			  <div style="font-size:12px;color:#08011E;margin-left:20px;margin-top:3px"> ${nodeData.data.rol} </div>
              <div style="color:#716E7B;margin-left:20px;margin-top:3px;font-size:10px;"> ${nodeData.data.info} </div>
           </div>
  `;
}
