// Work incrementally but by the end of it you should have defined multiple prototype functions:
// use new to
//
// Library --> (name, creator, playlists)
// Playlist --> (name, tracks =[])
//              AND average rating of all tracks (avg), total duration of all tracks (sum))
// Track --> (title, Rating, length)
// This one will be slightly different from the Week 1 in that it will have the following functionality:
//

class Library {
  constructor(creator, name) {
    this.creator = creator;
    this.name = name;
    this.playlists = [];
  }
}

class Playlist {
  constructor(name) {
    this.name = name;
    this.tracks = [];
  }
  _overallRating(tracks) {
    let allRatings = 0;
    for (let track of tracks) {
      allRatings += track.rating;
    }
    let totalNumOfTracks = this.tracks.length;
    let avgRating = allRatings/totalNumOfTracks;
    return avgRating;
  }
  _totalDuration(tracks) {
    let duration = 0;
    for (let track of tracks) {
      let time = track.length.split(":");
      let timeInSec = parseInt(time[0])*60+parseInt(time[1]);
      duration += timeInSec;
    }
    const totalSeconds = duration % 60;
    return Math.floor(duration/60) + ":" + (totalSeconds < 10 ? '0' + totalSeconds : totalSeconds);
  }
}

class Track {
  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}

/* program */
//Create a library
let library = new Library("Lib", "Rose");
//Create a playlist
let playlist1 = new Playlist("Playist1");
//create tracks
let song1 = new Track("Track1", 5, "2:18");
let song2 = new Track("Track2", 4, "2:20");
let song3 = new Track("Track3", 3, "3:20");
//add songs to playlist
playlist1.tracks.push(song1, song2, song3);
//add playlist to library
library.playlists.push(playlist1);

//testing
console.log("library: ", library);
console.log("Playlist: ", playlist1);
console.log("Track 1: ", song1);
console.log("Track 2: ", song2);
console.log("Track 3: ", song3);

console.log("Overall Rating: ", playlist1._overallRating(playlist1.tracks));
console.log("Total Duration: ", playlist1._totalDuration(playlist1.tracks));
