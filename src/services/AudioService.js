let _player

function setPlayerRef(playerRef) {
  _player = playerRef
}

function seek(time) {
  _player.seek(time)
}

export default {
  seek,
  setPlayerRef,
}
