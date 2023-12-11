//1. Render song
//2. Scoll top
//3. PLay/ pause / seek
//4. CD rotate
//5. Next / prev
//6. Random
//7. Next / Repeat when ended
//8. Active song
//9. Scroll active song into view
//10. Play song when click

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);



const app = {
    song: [
        {
            name: 'Title ',
            singer: 'Meghan Trainor',
            path: 'C:\Users\phaml\OneDrive\Máy tính\Music player\asset\Path\song1.mp3',
            image: 'C:\Users\phaml\OneDrive\Máy tính\Music player\asset\img\maxresdefault.jpg'
        },
        {
            name: 'Superheroes ',
            singer: 'The script',
            path: 'C:\Users\phaml\OneDrive\Máy tính\Music player\asset\Path\song2.mp3',
            image: 'C:\Users\phaml\OneDrive\Máy tính\Music player\asset\img\superheroes.jpg'
        }
    ],
    render: function(){
        const htmls = this.song.map(song => {
            return `
            <div class="song">
                <div class="thumb" style="background-image: url('${song.image}')">
            </div>
            <div class="body">
              <h3 class="title">${song.name}</h3>
              <p class="author">${song.singer}r</p>
            </div>
            <div class="option">
              <i class="fas fa-ellipsis-h"></i>
            </div>
          </div>
            `
        })
        $('.playlists').innerHTML = htmls.joins(' ')
    },
    start: function() {
        this.render();
    }

}