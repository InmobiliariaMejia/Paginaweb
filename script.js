// Datos de ejemplo — cámbialos por los tuyos
const propiedades = [
  { 
    id: 'casa1',
    titulo: 'Casa en residencial Andalucia 1',
    precio: 'L. 4,200,000.00',
    imagenes: ['img/casa1.jpeg','img/casa1.1.jpeg','img/casa1.2.jpeg','img/casa1.3.jpeg','img/casa1.4.jpeg'], 
    dormitorios: 3,
    banos: 2,
    sala: 1,
    cocina: 1,
    comedor: 1,
    descripcion:''
  },
  { 
    id: 'casa2',
    titulo: 'Casa en residencial monte real del bosque',
    precio: 'L. 2,650,000.00',
    imagenes: ['img/casa2.jpeg','img/casa2.1.jpeg','img/casa2.2.jpeg','img/casa2.3.jpeg'],
    dormitorios: 3,
    banos: 2,
    sala: 1,
    cocina: 1,
    comedor: 1,
    descripcion:''
  },
  { 
    id: 'casa3',
    titulo: 'Casa en residencial quinta los laureles',
    precio: 'L. 3,250,000.00',
    imagenes: ['img/casa3.jpeg','img/casa3.1.jpeg','img/casa3.2.jpeg','img/casa3.3.jpeg','img/casa3.4.jpeg'],
    dormitorios: 3,
    banos: 2,
    sala: 1,
    cocina: 1,
    comedor: 1,
    descripcion:''
  },
  { 
    id: 'casa4',
    titulo: 'Residencial andalucia 2',
    precio: 'L. 4,100,000.00',
    imagenes: ['img/casa4.jpeg','img/casa4.1.jpeg','img/casa4.2.jpeg','img/casa4.3.jpeg','img/casa4.4.jpeg'],
    dormitorios: 3,
    banos: 2,
    sala: 1,
    cocina: 1,
    comedor: 1,
    descripcion:''
  },
  { 
    id: 'casa5',
    titulo: 'Casa en residencial el toronjal 2',
    precio: 'L. 12,500,000.00',
    imagenes: ['img/casa5.jpeg','img/casa5.1.jpeg','img/casa5.2.jpeg','img/casa5.3.jpeg','img/casa5.4.jpeg'],
    dormitorios: 4,
    banos: 3,
    sala: 3,
    cocina: 1,
    comedor: 1,
    descripcion:''
  },
  { 
    id: 'casa6',
    titulo: 'Casa en col. Riviera',
    precio: 'L. 1,750,000.00',
    imagenes: ['img/casa6.jpeg','img/casa6.1.jpeg','img/casa6.2.jpeg','img/casa6.2.jpeg','img/casa6.3.jpeg','img/casa6.4.jpeg','img/casa6.5.jpeg'],
    dormitorios: 3,
    banos: 3,
    sala: 2,
    cocina: 1,
    comedor: 1,
    descripcion:''
  },
  { 
    id: 'casa7',
    titulo: 'Casa en residencial Valencia',
    precio: 'L. 2,400,000.00',
    imagenes: ['img/casa7.jpeg','img/casa7.1.jpeg','img/casa7.2.jpeg','img/casa7.3.jpeg','img/casa7.4.jpeg','img/casa7.5.jpeg','img/casa7.6.jpeg','img/casa7.7.jpeg'],
    dormitorios: 3,
    banos: 2,
    sala: 1,
    cocina: 1,
    comedor: 1,
    descripcion:''
  },
  { 
    id: 'casa8',
    titulo: 'Casa en residencial andalucia 2',
    precio: 'L.  2,750,000.00',
    imagenes: ['img/casa8.jpeg','img/casa8.1.jpeg','img/casa8.2.jpeg','img/casa8.3.jpeg','img/casa8.4.jpeg'],
    dormitorios: 3,
    banos: 2,
    sala: 1,
    cocina: 1,
    comedor: 1,
    descripcion:''
  },
  { 
    id: 'casa9',
    titulo: 'Casa en residencial  rancho lima',
    precio: 'L. 3,100,000.00',
    imagenes: ['img/casa9.jpeg','img/casa9.1.jpeg','img/casa9.2.jpeg','img/casa9.3.jpeg','img/casa9.4.jpeg','img/casa9.5.jpeg','img/casa9.6.jpeg'],
    dormitorios: 3,
    banos: 2,
    sala: 1,
    cocina: 1,
    comedor: 1,
    descripcion:'Casa estilo rústico con chimenea, techos de madera y terraza para disfrutar la naturaleza.'
  }
];

const grid = document.getElementById('grid');
const detailView = document.getElementById('detail-view');
const listView = document.getElementById('list-view');
const detailContent = document.getElementById('detailContent');
const backBtn = document.getElementById('backBtn');

// Renderiza las tarjetas de propiedades
function renderCards(){
  grid.innerHTML = '';
  propiedades.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';
    card.tabIndex = 0;
    card.innerHTML = `
      <div class="thumb" style="background-image:url(${p.imagenes[0]})"></div>
      <div class="card-body">
        <div class="title">${p.titulo}</div>
        <div class="meta">${p.dormitorios} hab · ${p.banos} baños</div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:6px">
          <div class="price">${p.precio}</div>
          <button class="btn" data-id="${p.id}">Ver detalles</button>
        </div>
      </div>`;
    
    card.addEventListener('click', (e)=>{
      const id = e.target.dataset.id || p.id;
      location.hash = 'house-' + id;
    });

    grid.appendChild(card);
  });
}

// Muestra la lista de propiedades
function showList(){
  listView.style.display = '';
  detailView.classList.remove('active');
  detailView.setAttribute('aria-hidden','true');
  listView.setAttribute('aria-hidden','false');
}

// Muestra detalle de la propiedad con galería de miniaturas
function showDetail(id){
  const p = propiedades.find(x=>x.id===id);
  if(!p){ showList(); return; }

  detailContent.innerHTML = `
    <div class="gallery">
      <div class="main-image" id="mainImage" style="background-image:url(${p.imagenes[0]})"></div>
      <div class="thumbnails">
        ${p.imagenes.map((img,i) => `<div class="thumb" style="background-image:url(${img})" data-index="${i}"></div>`).join('')}
      </div>
      <aside class="info">
        <h2>${p.titulo}</h2>
        <div class="price">${p.precio}</div>
        <div class="meta">ID: ${p.id}</div>
        <div class="spec-list">
          <div class="spec">Habitaciones: ${p.dormitorios}</div>
          <div class="spec">Baños: ${p.banos}</div>
          <div class="spec">Sala: ${p.sala}</div>
          <div class="spec">Cocina: ${p.cocina}</div>
          <div class="spec">Comedor: ${p.comedor}</div>
          <div class="spec">Estacionamiento: Sí</div>
        </div>
        <p style="margin-top:10px;color:var(--muted)">${p.descripcion}</p>
       <button class="btn" onclick="window.location.href='https://wa.me/50497860841'">Contactar agente</button>

</a>

      </aside>
    </div>
  `;

  // Cambia la imagen principal al hacer clic en miniaturas
  const mainImage = document.getElementById('mainImage');
  const thumbs = detailContent.querySelectorAll('.thumbnails .thumb');
  thumbs.forEach(t => {
    t.addEventListener('click', ()=> {
      mainImage.style.backgroundImage = t.style.backgroundImage;
      thumbs.forEach(tt => tt.style.borderColor = 'transparent'); // limpia borde previo
      t.style.borderColor = '#007BFF'; // resalta activo
    });
  });
  if(thumbs[0]) thumbs[0].style.borderColor = '#007BFF'; // miniatura inicial activa

  listView.style.display = 'none';
  detailView.classList.add('active');
  detailView.setAttribute('aria-hidden','false');
  listView.setAttribute('aria-hidden','true');
}

// Maneja la navegación con hash
function router(){
  const h = location.hash;
  if(!h || h === '#') { showList(); return; }
  if(h.startsWith('#house-')){
    const id = h.replace('#house-','');
    showDetail(id);
  } else {
    showList();
  }
}

backBtn.addEventListener('click', ()=>{ location.hash = ''; });

renderCards();
window.addEventListener('hashchange', router);
router();

grid.addEventListener('keydown', (e)=>{
  const card = e.target.closest('.card');
  if(!card) return;
  if(e.key === 'Enter'){
    const id = card.querySelector('.btn').dataset.id;
    location.hash = 'house-' + id;
  }
});
