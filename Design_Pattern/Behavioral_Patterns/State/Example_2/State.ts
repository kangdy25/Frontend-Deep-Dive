import { VideoPlayer } from "./VideoPlayer";

export interface State {
  play(player: VideoPlayer): void;
  stop(player: VideoPlayer): void;
}
