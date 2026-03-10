import { VideoPlayer } from "./VideoPlayer";

const player = new VideoPlayer();

player.play(); // "Starting the video."
player.play(); // "Video is already playing."
player.stop(); // "Pausing the video."
player.play(); // "Resuming the video."
player.stop(); // "Pausing the video."
player.stop(); // "Stopping the video."
player.stop(); // "Video is already stopped."
