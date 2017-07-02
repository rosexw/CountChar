/* 4. Music Library
Exercise
Goal: implement a program that manages music playlists using objects and arrays.
It will consist of:
1. an object, the library, that will store all the info about tracks and playlists
2. a collection of functions that will perform certain operations on the library,
    for example, addPlayList.

implement the following functions:
printPlaylists, printTracks, printPlaylist, addTrackToPlaylist, addTrack, addPlaylist,
printSearchResults (stretch)
Fork and clone this gist. Placeholders for each function have been created for you.
Tips:
get one function working before moving onto the next
write some test code for each of the functions
commit frequently!
feel free to create extra functions

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
             }
}

// FUNCTIONS TO IMPLEMENT:

//console.log("printPlaylists");
// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
var printPlaylists = function () {
  var numberOfTracks = 0;
  for (var key in library.playlists){
    var playlist = library.playlists[key];
    var track = playlist.tracks;
//    console.log(playlist.id, ":", playlist.name, "-", track.length, "tracks");
  }
}
printPlaylists();




//console.log("printTracks");
// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (var key in library.tracks){
    var tr = library.tracks[key];
//    console.log(tr.id + ": " + tr.name + " by " + tr.artist + " ("+ tr.album+")" );
  }
}
printTracks();





console.log("printPlaylist");
// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

//1. we get playlistId from user
//2. call function printPlayLists using the playlistId if
//3. call printTracks function using the tracks given in the playlist

var printPL = function (playlistId) {
  var playlist = library.playlists[playlistId];
  console.log(playlist.id + ":", playlist.name, "-", playlist.tracks.length, "tracks");
}

var printTrack = function (trackId) {
  var tr =  library.tracks[trackId];
//  console.log(tr.id + ": " + tr.artist + " ("+ tr.album+")" );
}

var printPlaylist = function (playlistId) {
  printPL(playlistId);
  var tracks = library.playlists[playlistId].tracks;
  for (var t of tracks){
    printTrack(t);
  }
}

printPlaylist("p01");



//console.log("addTrackToPlaylist");
// adds an existing track to an existing playlist

//example: adding t03 to p01
//1. getting trackId and playlistId from user
//3. find track in tracks
//5. find playlist in playlists
//6. put track from step 3 in playlist from step 5 results.push

var addTrackToPlaylist = function (trackId, playlistId) {
  library.playlist[playlistId].tracks.push(trackId);
}




// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

console.log("addTrack");
// adds a track to the library

//1. get track info: name, artist, album
//2. assign id following current track ids - t04
//3. format it so the track reads id, name, artist, album
//4. push to library
var addTrack = function (name, artist, album) {
  var tID = uid();
  var newTrack = {id: tID, name: name, artist: artist, album: album};
  library.tracks[tID] = newTrack;
}
addTrack("My Shot", "Hamilton", "Hamilton Mix Tape");
console.log(library);

//console.log("addPlaylist");
// adds a playlist to the library

var addPlaylist = function (name) {
  var pID = uid();
  var newPlaylist = {id: pID, name: name, tracks: []};
  library.playlists[pID] = newPlaylist;
}
addPlaylist("Musicals");
console.log(library);


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}
