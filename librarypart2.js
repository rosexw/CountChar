/* w1d3
Music Library Part 2
Exercise: Refactor MusicLibrary 1 so that they are all properties of the object Library
you can use this. instead of library.
Tips:

instead of referring to library inside of your functions, you should refer to this instead, ie. this.tracks
outside of the library object, functions will need to be invoked as follows: library.printTracks()


*/

var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                      }
             },

  printPlaylists:  function () {
    var numberOfTracks = 0;
    for (var key in this.playlists){
      var playlist = this.playlists[key];
      var track = playlist.tracks;
      console.log(playlist.id, ":", playlist.name, "-", track.length, "tracks");
    }
  },
  printTracks: function () {
    for (var key in this.tracks){
      var tr = this.tracks[key];
      console.log(tr.id + ": " + tr.name + " by " + tr.artist + " ("+ tr.album+")" );
    }
  },
  printPL: function (playlistId) {
    var playlist = this.playlists[playlistId];
    console.log(playlist.id + ":", playlist.name, "-", playlist.tracks.length, "tracks");
  },
  printTrack: function (trackId) {
    var tr =  this.tracks[trackId];
    console.log(tr.id + ": " + tr.artist + " ("+ tr.album+")" );
  },
  printPlaylist: function (playlistId) {
    this.printPL(playlistId);
    var tracks = this.playlists[playlistId].tracks;
    for (var t of tracks){
      this.printTrack(t);
    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    this.playlist[playlistId].tracks.push(trackId);
  },
  addTrack: function (name, artist, album) {
    var tID = uid();
    var newTrack = {id: tID, name: name, artist: artist, album: album};
    this.tracks[tID] = newTrack;
  },
  addPlaylist: function (name) {
    var pID = uid();
    var newPlaylist = {id: pID, name: name, tracks: []};
    this.playlists[pID] = newPlaylist;
  }
}

library.printPlaylists();
library.printTracks();

library.printPlaylist("p01");
library.addTrackToPlaylist("t04", "p03");
library.addTrack("My Shot", "Hamilton", "Hamilton Mix Tape");
library.addPlaylist("Musicals");

//library.printPL();
//library.printTrack();
console.log(library);


var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}



// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}
