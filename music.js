
document.addEventListener("DOMContentLoaded", () => {
  const musicList = [
      { id: 1, title: "first song", artist: "Artist A", src: "song-a.mp3" },
      { id: 2, title: "Second song", artist: "Artist B", src: "song-b.mp3" },
     
  ];

  const playlists = [];
  let currentPlaylist = [];
  
  const musicListElement = document.getElementById("music-list");
  const playlistListElement = document.getElementById("playlist-list");
  const nowPlayingElement = document.getElementById("now-playing");
  const audioPlayer = document.getElementById("audio-player");
  const createPlaylistButton = document.getElementById("create-playlist");

  function displayMusicList() {
      musicList.forEach(music => {
          const musicItem = document.createElement("div");
          musicItem.classList.add("music-item");
          musicItem.textContent = `${music.title} - ${music.artist}`;
          musicItem.addEventListener("click", () => playMusic(music));
          musicListElement.appendChild(musicItem);
      });
  }

  function displayPlaylists() {
      playlistListElement.innerHTML = "";
      playlists.forEach((playlist, index) => {
          const playlistItem = document.createElement("div");
          playlistItem.classList.add("playlist-item");
          playlistItem.textContent = `Playlist ${index + 1}`;
          playlistItem.addEventListener("click", () => playPlaylist(playlist));
          playlistListElement.appendChild(playlistItem);
      });
  }

  function playMusic(music) {
      nowPlayingElement.textContent = `${music.title} - ${music.artist}`;
      audioPlayer.src = music.src;
      audioPlayer.play();
  }

  function playPlaylist(playlist) {
      if (playlist.length > 0) {
          currentPlaylist = playlist;
          playMusic(playlist[0]);
      }
  }

  createPlaylistButton.addEventListener("click", () => {
      const newPlaylist = [];
      musicList.forEach(music => {
          const shouldAdd = confirm(`Add ${music.title} to the new playlist?`);
          if (shouldAdd) {
              newPlaylist.push(music);
          }
      });
      if (newPlaylist.length > 0) {
          playlists.push(newPlaylist);
          displayPlaylists();
      }
  });

  displayMusicList();
});
